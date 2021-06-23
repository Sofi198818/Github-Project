import SignInForm from "../../components/SignInForm";

function SignIn({ location }) {
  const { state } = location;
  return (
    <div>
      {state?.success && <h3>Sign Up Was Successful</h3>}
      <SignInForm />
    </div>
  );
}

export default SignIn;
