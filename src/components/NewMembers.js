import React, { useEffect } from "react";
import { MemberItem } from "./MemberItem";

export const NewMembers = () => {
  const members = [
    {
      name: "Felix Vega",
      job: "FrontEnd Developer",
      photoUrl:
        "https://res.cloudinary.com/dhyxqmnua/image/upload/v1640292954/csuzx89sd0hnrgubogzh.png",
    },
    {
      name: "Juan Carlos",
      job: "FrontEnd Developer",
      photoUrl:
        "https://res.cloudinary.com/dhyxqmnua/image/upload/v1640292954/csuzx89sd0hnrgubogzh.png",
    },
    {
      name: "Pedro Ramirez",
      job: "FrontEnd Developer",
      photoUrl:
        "https://res.cloudinary.com/dhyxqmnua/image/upload/v1640292954/csuzx89sd0hnrgubogzh.png",
    },
    {
      name: "Pablo Sanchez",
      job: "FrontEnd Developer",
      photoUrl:
        "https://res.cloudinary.com/dhyxqmnua/image/upload/v1640292954/csuzx89sd0hnrgubogzh.png",
    },
    {
      name: "Maria Cortazar",
      job: "FrontEnd Developer",
      photoUrl:
        "https://res.cloudinary.com/dhyxqmnua/image/upload/v1640292954/csuzx89sd0hnrgubogzh.png",
    },
  ];

  useEffect(() => {
    const getNewMembers = async () => {
      // try {
      //   // const usersCollection = collection(db, "users");
      //   // const usersSnapshot = await getDocs(usersCollection);
      //   // const usersList = usersSnapshot.docs.map((doc) => doc.data());
      //   // console.log(usersList);
      //   // return;
      // } catch (error) {
      //   console.log(error);
      // }
    };
    getNewMembers();
  }, []);

  return (
    <>
      <div className="md:w-5-6 lg:w-5-6 xl:w-2/6 p-10 border-slate-400 border-2 mt-2 rounded-lg drop-shadow-lg shadow-sm shadow-slate-500 md:mr-0 lg:mr-0 xl:mr-6">
        <div className="flex flex-col">
          <span className="text-xl font-semibold mb-4">New Members</span>

          {members.map((member) => {
            return <MemberItem key={member.name} member={member} />;
          })}
        </div>
      </div>
    </>
  );
};
