import bcrypt from 'bcryptjs';
import prisma from '../../lib/prisma';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const result = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    res.json(result);
  } else if (req.method === 'GET') {
    res.json({
      message: 'Guess it works for now',
    });
  }
}
