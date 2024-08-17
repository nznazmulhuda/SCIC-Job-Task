// @ts-nocheck

import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

export const AuthContex = createContext(null);

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	const login = (email: string, password: string) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const googleLogin = () => {
		const provider = new GoogleAuthProvider();
		return signInWithPopup(provider);
	};

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				setUser(authUser);
			} else {
				setUser(null);
			}
		});
		return unsubscribe; // unsubscribe on unmount
	}, []);

	const value = { user, login, googleLogin };
	return <AuthContex.Provider value={value}>{children}</AuthContex.Provider>;
};
