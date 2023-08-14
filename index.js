const axios = require("axios");
const marked = require("marked");

const bard_api = async (query, bard_cookie) => {
  const data = `f.req=%5Bnull%2C%22%5B%5B%5C%22${encodeURIComponent(query)}%5C%22%2C0%2Cnull%2C%5B%5D%5D%2C%5B%5C%22en-GB%5C%22%5D%2C%5B%5C%22c_cee9290e19e642ae%5C%22%2C%5C%22r_43e90ff8c6323561%5C%22%2C%5C%22rc_43e90ff8c6323284%5C%22%2Cnull%2Cnull%2C%5B%5D%5D%2C%5C%22!rq2lrfDNAAY7efD2G3lCRGT3uVZcwnc7ADkAIwj8Rt29EpcZayhg2XAn57Xf4Ui-vytd8qP1xnYM7_2ozgK7hxpPNuAQZpAArCWLScOMnXR_urQCAAAAjlIAAAAGaAEHmQJTJmGLQuzTchM11XAUx7adhLHEZP2fjEQglHWApFPj-AzSGpQt-rO1HASSbLuJQws_SC1ZOk8XyXP6pR6EKNFwfTZfRkZkGtId6VB_xL6xMpqUsMzHBEG9r0L3tT1hRUE4OdT1prnIwlrDAoTIhAX5KPqaU2itvrRo6W6sAJuW-6Y2aQlDBZpYwAqFzLxnQ672TQ0PwCNM95yWe4f9xXaRjngLJaIvfBop3_PFOldrhUKoUiSRWkFGoUHmOB0adTV2SsIKutTQstGpAY6AvjeC6Fcg9g_TYOp-PLiVI0VK48dOeX6hDhZ48liKrWETBPvx8GlGTdwPLe5MbEfZ-soJDR46OSmO5Isd5JjeyiDKRMlxkPqSnf_8xXyJQhu_xrdb4X4pJdHVgVKGezgPrc7A7OJITDR53e25h396yZp4qzWNsXr0BEdOlvHox9ya773Bcy5ChMOkS-eRAJbbdvPcJ60UPdlmFFbkkGulUBPtT8Zn97UN5w8TMHLWwjsfSIfaCbXl1egA0vxE8xZVUFzUZnO9pPX2jNzumNVFppBX6Aq_YxJYp8JV4u4-c3tKmJX83hxT_aSHxtujmFqwWLQX3Sn92f9kq-gQXi67moSTvFkeKK6XgDOa7RnGWErYtHydxe7mSb2EHn70IT6Fhtl66QLnVWdPVZOXClN10pf0l1YeYKnXHans5K0tSNY7WUDp68I7cWDfvSm_zoIpurpuFtVcmk_MuoFUTbL7icUgom5Jj9AD1noIKublrAvbuj476DCCkn7jxVsqjtFRO717h2P9zQ%5C%22%2C%5C%221cb476aedcd0236dceb08f6a55beef42%5C%22%2Cnull%2C%5B0%5D%2C0%2C%5B%5D%2C%5B%5D%2C1%5D%22%5D&at=AOTFbH7b8c3jxBPbp-ihIV7BRzJW%3A1691912410584&`;

  const config = {
    method: "post",
    url: "https://bard.google.com/u/2/_/BardChatUi/data/assistant.lamda.BardFrontendService/StreamGenerate?hl=en-GB",
    headers: {
      accept: "*/*",
      "accept-language": "en-US,en;q=0.9",
      "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
      "sec-ch-ua": ' \\"Not/A)Brand\\";v=\\"99\\", \\"Brave\\";v=\\\"115\\", \\"Chromium\\";v=\\"115\\"',
      "sec-ch-ua-mobile": " ?0",
      "sec-ch-ua-model": ' \\"\\"',
      "sec-ch-ua-platform": ' \\"Windows\\"',
      "sec-ch-ua-platform-version": ' \\"10.0.0\\"',
      "sec-fetch-dest": " empty",
      "sec-fetch-mode": " cors",
      "sec-fetch-site": " same-origin",
      "sec-gpc": " 1",
      "x-same-domain": " 1",
      cookie: `__Secure-1PSID=${bard_cookie};`,
      Referer: " https://bard.google.com/",
      "Referrer-Policy": " origin",
    },
    data: data,
  };

  function convertHtmlEntities(input) {
    const plainText = input.replace(/<[^>]+>/g, "");
    const decodedText = plainText.replace(/\\\\u(\w{4})/g, (_, hex) =>
      String.fromCharCode(parseInt(hex, 16))
    );
    return decodedText;
  }

  try {
    const response = await axios(config);
    const data = JSON.stringify(response.data);
    const myaa = data.split("wrb.fr");
    const rawData = myaa[1].split("null");
    const raw2 = rawData[3];
    const lenSize = raw2.length;
    const newData = raw2.slice(36, lenSize - 9);
    const finalHTMLdata = marked.parse(newData).replace(/\\n/g, " ");
    const convertedFinalData = convertHtmlEntities(finalHTMLdata);
    return convertedFinalData;
  } catch (error) {
    throw error;
  }
};

module.exports = bard_api;
