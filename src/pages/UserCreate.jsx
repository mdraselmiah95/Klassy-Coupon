import { Input, Button, Tooltip } from "@nextui-org/react";
import React, { useRef, useState } from "react";
import { RiUserAddFill } from "react-icons/ri";

const UserCreate = () => {
  const [users, setUsers] = useState([]);

  const emailRef = useRef();
  const passwordRef = useRef();

  const createUser = (e) => {
    e.preventdefault();
    const user = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    console.log(user);
  };

  return (
    <div className="h-screen">
      <p className="my-5 text-2xl text-center text-bold">CREATE USER</p>
      <form
        onSubmit={createUser}
        className="flex items-center justify-center gap-5 my-10"
      >
        <Input
          ref={emailRef}
          isClearable
          isRequired
          type="email"
          label="Email"
          variant="bordered"
          className="max-w-[220px]"
          size="sm"
        />
        <Input
          ref={passwordRef}
          isClearable
          isRequired
          type="password"
          label="Password"
          variant="bordered"
          className="max-w-[220px]"
          size="sm"
        />
        <Tooltip content="Create User">
          <Button
            isIconOnly
            type="submit"
            className="text-white bg-black"
            size="lg"
          >
            <RiUserAddFill />
          </Button>
        </Tooltip>
      </form>
    </div>
  );
};

export default UserCreate;
