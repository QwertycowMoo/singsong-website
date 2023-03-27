import Client from "./Client";

export const SENDAUDIO_ENDPOINT = "/postAudio"

export async function sendAudio(data: Object, filename: String) {
  return await Client.post(SENDAUDIO_ENDPOINT + "?filename=" + filename, data, {
    headers: {
        'Content-Type': `multipart/form-data`
    }})
    .then((res) => {
      return true;
    })
    .catch((e) => {
      return false;
    });
}
