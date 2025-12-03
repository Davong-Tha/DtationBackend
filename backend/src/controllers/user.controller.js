export async function me(req, res) {
  return res.json({
    name: req.user.name,
  });
}
