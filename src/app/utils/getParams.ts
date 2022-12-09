// TODO: храним ID не тут, а где-то в сторе
function getPath(window: Window): string {
  const eventId = getEventId(window);
  const inviterId = getInviterId(window);

  let str = '';
  if (eventId || inviterId) str += '?';
  if (eventId) str += `id=${eventId}`;
  if (eventId && inviterId) str += '&';
  if (inviterId) str += `inviterId=${inviterId}`;
  return str;
}

function getEventId(window: Window): string {
  const params = new URLSearchParams(window.location.search);
  return <string>params.get('id');
}

function getInviterId(window: Window): string {
  const params = new URLSearchParams(window.location.search);
  return <string>params.get('inviterId');
}

export { getPath, getEventId, getInviterId };
