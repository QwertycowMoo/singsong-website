import Client from "./Client";

export const SENDAUDIO_ENDPOINT = "/audioData"

export async function sendAudio(data: Object) {
  return await Client.post(SENDAUDIO_ENDPOINT, data, {
    headers: {
        'Content-Type': `multipart/form-data` // might need boundaries? Backend able to expand this into a buffer?
    }})
    .then((res) => {
      return true;
    })
    .catch((e) => {
      return false;
    });
}
