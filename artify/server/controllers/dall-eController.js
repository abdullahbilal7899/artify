import * as dotenv from 'dotenv';
import axios from 'axios';
import FormData from 'form-data';

dotenv.config();

const post = async (req, res) => {
  try {
    const { prompt } = req.body;

    const form = new FormData();
    form.append('prompt', prompt);


    const clipDropResponse = await axios.post(
      'https://clipdrop-api.co/text-to-image/v1',
      form,
      {
        headers: {
          'x-api-key': process.env.CLIPDROP_API_KEY,
          ...form.getHeaders(),
        },
        responseType: 'arraybuffer', 
      }
    );

   
    const imageBase64 = Buffer.from(clipDropResponse.data, 'binary').toString('base64');


    res.status(200).json({ photo: imageBase64 });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send(error?.response?.data?.error?.message || 'Something went wrong');
  }
};

export { post };
