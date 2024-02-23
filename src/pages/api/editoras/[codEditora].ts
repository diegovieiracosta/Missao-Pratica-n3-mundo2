import { NextApiRequest, NextApiResponse } from 'next';
import { controleEditora } from '../../../controle/ControleEditora';

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const { codEditora } = req.query;
    try {
      const nomeEditora = controleEditora.getNomeEditora(Number(codEditora));
      res.status(200).json({ nome: nomeEditora });
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};
