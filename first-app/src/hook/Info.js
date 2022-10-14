import { useEffect, useState } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // componentDidMount
  useEffect(() => {
    console.log("componentDidMount");

    // componentWillUnmount
    return () => {
      console.log("cleanup", "componentWillUnmount");
    };
  }, []);

  // componentDidUpdate
  useEffect(() => {
    console.log({ name });

    // getSnapshotBeforeUpdate
    return () => {
      console.log("cleanup", "");
      console.log({ name });
    };
  }, [name]);

  //
  useEffect(() => {
    console.log("effect");
    console.log({
      name,
    });

    return () => {
      console.log("cleanup");
      console.log({ name });
    };
  }, [name]);

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  return (
    <>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={email} onChange={onChangeEmail} />
      </div>

      <div>
        <h2>이름: {name}</h2>
        <h2>이메일: {email}</h2>
      </div>
    </>
  );
};

export default Info;
