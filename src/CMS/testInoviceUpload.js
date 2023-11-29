import React, { useEffect } from "react";
import { firebase } from "../config";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

export default function TestInoviceUpload() {
  const [user] = useAuthState(firebase.auth());

  useEffect(() => {
    const fetchData = async () => {
      try {
        //const businessesRef = firebase.firestore().collection("Business");
        //   const snapshot = await businessesRef.get();
        //   const businessesData = snapshot.docs.map((doc) => ({
        //     id: doc.id,
        //     businessName: doc.data().businessName,
        //     regNumber: doc.data().regNumber,
        //     businessType: doc.data().selectedBusinessType,
        //     industry: doc.data().selectedIndustry,
        //   }));
        //   setBusinessesList(businessesData);
        //   setBusinessesCount(snapshot.size);

        //   const usersRef = firebase.firestore().collection("Users");
        //   const usersSnapshot = await usersRef.get();
        //   setUsersCount(usersSnapshot.size);
      } catch (error) {
        console.error("Error fetching businesses:", error);
      }
    };

    if (user) {
      fetchData();
    }
  }, [user]);
  return <div>testInoviceUpload</div>;
}


