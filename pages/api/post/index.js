export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      return res.json({
        message: req.user,
      });
      break;

    default:
      break;
  }
}
