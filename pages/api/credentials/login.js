const fakeUser = [
  { username: "andri", password: 111, group: "admin" },
  { username: "andri", password: 111, group: "manager" }
];

export default function login(req, res) {
  res.status(200).json(fakeUser);
}
