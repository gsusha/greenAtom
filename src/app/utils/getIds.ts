function getIds(window: Window): string {
  const eventId = new URLSearchParams(window.location.search).get('id');
  const inviterId = new URLSearchParams(window.location.search).get('inviterId');

  let str = '';
  if (eventId || inviterId) str += '?';
  if (eventId) str += `id=${eventId}`;
  if (eventId && inviterId) str += '&';
  if (inviterId) str += `inviterId=${inviterId}`;
  console.log(str);
  return str;
}

export default getIds;
