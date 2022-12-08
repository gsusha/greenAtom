// TODO: храним ID не тут, а где-то в сторе
function getPath(window: Window): string {
  const params = new URLSearchParams(window.location.search);
  const eventId = getEventId(params);
  const inviterId = getInviterId(params);

  let str = '';
  if (eventId || inviterId) str += '?';
  if (eventId) str += `id=${eventId}`;
  if (eventId && inviterId) str += '&';
  if (inviterId) str += `inviterId=${inviterId}`;
  return str;
}

function getEventId(params: URLSearchParams): number {
  const eventId = params.get('id');
  return Number(eventId);
}

function getInviterId(params: URLSearchParams): number {
  const inviterId = params.get('inviterId');
  return Number(inviterId);
}

export { getPath, getEventId, getInviterId };
