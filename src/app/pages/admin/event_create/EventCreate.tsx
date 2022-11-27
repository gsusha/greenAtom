// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import * as React from 'react';
import { useEffect, useState } from 'react';
import AdminLayout from '../../../layout/admin/AdminLayout';
import Header from '../../../components/header/Header';
import { useAppDispatch } from '../../../store/hooks';
import { createEvent, newEvent } from '../main/store/eventsSlice';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import TextField from '../../../components/textfield/textField';
import Button from '../../../components/button/button';
import { HiPlus } from 'react-icons/hi';
import InputMask from 'react-input-mask';

const validationSchema = yup.object().shape({
  name: yup.string().required().max(50, 'errors.maxStringLen'),
  date: yup.string().required(),
});

function EventCreate() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    return () => dispatch(newEvent());
  }, []);

  const methods = useForm<Event>({
    mode: 'onChange',
    defaultValues: {},
    resolver: yupResolver(validationSchema) as any,
  });

  const {
    getValues,
    trigger,
    control,
    reset,
    formState: { errors },
  } = methods;

  console.log(getValues());

  const handleSave = () => {
    trigger().then((check) => {
      if (!check) {
        return console.log('Херня в полях');
      }

      setSubmit(true);
      dispatch(createEvent({ data: getValues() })).then(({ payload }) => {
        if (!payload) {
          console.log('Херня с пейлодом');
        } else {
          console.log('Не херня');
          navigate(-1);
        }
        setSubmit(false);
      });
    });
  };

  return (
    <AdminLayout>
      <Header>Новое мероприятие</Header>
      <form noValidate>
        <FormProvider {...methods}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField {...field} type="text">
                Название
              </TextField>
            )}
          />
          <Controller
            name="date"
            control={control}
            render={({ field }) => (
              <TextField {...field} type="text">
                Дата
              </TextField>
            )}
          />
        </FormProvider>
      </form>
      <div onClick={handleSave}>
        <Button icon={<HiPlus />}>Создать</Button>
      </div>
    </AdminLayout>
  );
}

export default EventCreate;
