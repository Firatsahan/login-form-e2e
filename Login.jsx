import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [terms, setTerms] = useState(false);
  const navigate = useNavigate();

  const isValidEmail = email.includes("@") && email.includes(".");
  const isValidPassword = password.length >= 8;
  const isFormValid = isValidEmail && isValidPassword && terms;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      navigate("/success");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>

      <div>
        <label>Email</label>
        <input
          data-cy="form-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {email && !isValidEmail && (
          <span data-cy="email-error">Email geçersiz</span>
        )}
      </div>

      <div>
        <label>Şifre</label>
        <input
          data-cy="form-password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {password && !isValidPassword && (
          <span data-cy="password-error">Şifre en az 8 karakter</span>
        )}
      </div>

      <div>
        <label>
          <input
            data-cy="form-terms"
            type="checkbox"
            checked={terms}
            onChange={(e) => setTerms(e.target.checked)}
          />
          Şartları Kabul Ediyorum.
        </label>
      </div>

      <button data-cy="form-submit" type="submit" disabled={!isFormValid}>
        Giriş
      </button>
    </form>
  );
}
