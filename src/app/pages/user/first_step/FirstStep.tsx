// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React, { useEffect, useState } from 'react';
import Title from '../../../components/title/title';
import TextField from '../../../components/textfield/textField';
import Progress from '../../../components/progress/progress';
import Button from '../../../components/button/button';
import { CgArrowLongRight } from 'react-icons/cg';
import UserLayout from '../../../layout/user/UserLayout';
import { useAppDispatch } from '../../../store/hooks';
import { useNavigate } from 'react-router-dom';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { createPerson, newPerson } from './store/firstSlice';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';

const validationSchema = yup.object().shape({
  name: yup.string().required().max(20, 'Слишком длинная строка'),
  phone: yup.string().required().max(10, 'Слишком длинная строка'),
  telegram: yup.string().required().max(20, 'Слишком длинная строка'),
});

function FirstStep() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    return () => dispatch(newPerson());
  }, []);

  const methods = useForm<Person>({
    mode: 'onChange',
    defaultValues: {},
    resolver: yupResolver(validationSchema) as any,
  });

  const { getValues, trigger, control, setValue, watch } = methods;

  const form = watch();

  console.log(getValues());

  const handleSave = () => {
    trigger().then((check) => {
      if (!check) {
        return console.log('Херня в полях');
      }

      setSubmit(true);
      dispatch(createPerson({ data: getValues() })).then(({ payload }) => {
        if (!payload) {
          console.log('Херня с пейлодом');
        } else {
          console.log('Не херня');
          navigate('/form/second');
        }
        setSubmit(false);
      });
    });
  };

  const specs = [
    {
      name: 'Case Lab ESB Express',
    },
    {
      name: 'Case Lab SUPPORT',
    },
    {
      name: 'Case Lab WEB',
    },
    {
      name: 'Case Lab JavaScript',
    },
    {
      name: 'Case Lab 1С',
    },
  ];

  return (
    <UserLayout>
      <form noValidate>
        <FormProvider {...methods}>
          <Title style={{ marginBottom: 10 }}>Шаг 1/3</Title>
          <Progress step={1} />
          <div className="description" style={{ marginBottom: 22 }}>
            Заполни <span>личные данные</span>:
          </div>

          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField {...field} type={'text'}>
                Имя *
              </TextField>
            )}
          />

          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <TextField {...field} type={'text'}>
                Телефон
              </TextField>
            )}
          />

          <Controller
            name="telegram"
            control={control}
            render={({ field }) => (
              <TextField {...field} type={'text'}>
                Телеграм
              </TextField>
            )}
          />

          <div className="description" style={{ marginBottom: 22, marginTop: 24 }}>
            И выбери <span>программу подготовки</span>, которая тебе интересна:
          </div>

          <RadioGroup
            column
            aria-label="type"
            name="column-radio-buttons-group"
            value={getValues().specialization}
            onChange={(e, v) => setValue('specialization', v)}
          >
            {specs.map((e, i) => (
              <FormControlLabel key={i} value={e.name} control={<Radio />} label={e.name} />
            ))}
          </RadioGroup>

          <div onClick={handleSave}>
            <Button to={`/form/second?id=${eventId}&inviterId=${inviterId}`} icon={<CgArrowLongRight />} marginTop={50}>
              Дальше
            </Button>
          </div>
        </FormProvider>
      </form>
    </UserLayout>
  );
}

export default FirstStep;
