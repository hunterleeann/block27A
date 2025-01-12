import { useState } from "react";
import axios from "axios";

export default function SignUpForm({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const submit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://fsa-jwt-practice.herokuapp.com/signup",

        form
      );
      setToken(data.token);

      console.log("Token saved:", data.token);
      // auth(data.token);
      // auth();
    } catch (e) {
      console.log(e);
    }
  };

  // const auth = async () => {
  //   try {
  //     console.log(token);
  //     const { data } = await axios.get(
  //       "https://fsa-jwt-practice.herokuapp.com/authenticate",
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     //console.log(data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  const change = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <form onSubmit={submit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter username"
            value={form.username}
            name="username"
            onChange={change}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={form.password}
            name="password"
            onChange={change}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
