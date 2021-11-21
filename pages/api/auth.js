import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../../lib/prisma';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { email, password } = req.body;
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (!user) {
        return res.json({
          status: 401,
          message: 'Wrong email or password',
        });
      }
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.json({
          status: 401,
          message: 'Wrong email or password',
        });
      }

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        process.env.JWTSECRET,
        { expiresIn: 60000 },
        (err, token) => {
          if (err) throw err;
          return res.json({
            status: 200,
            message: 'Authorized',
            expiresIn: 60000,
            token,
          });
        }
      );
    } catch (err) {
      console.error('Server error');
      return res.json({
        status: 500,
        message: err.message,
      });
    }
  }
}
