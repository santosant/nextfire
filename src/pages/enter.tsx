import { auth, googleAuthProvider } from "../lib/firebase";

export default function EnterPage(props: any) {
  const user = null;
  const username = null;

  return (
    <div>
      <main>
        {user ? (
          !username ? (
            <UsernameForm />
          ) : (
            <SignOutButton />
          )
        ) : (
          <SignInButton />
        )}
      </main>
    </div>
  );
}

//Sign in with Google Button

function SignInButton() {
  const signInWithGoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider);
  };

  return (
    <button className="btn-google" onClick={signInWithGoogle}>
      <img src={"/google.png"} /> Logar com o Google
    </button>
  );
}

function UsernameForm() {
  return <h1>form</h1>;
}

function SignOutButton() {
  return <button onClick={() => auth.signOut()}>Sair</button>;
}
