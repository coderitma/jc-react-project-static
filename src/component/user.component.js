export const UserSigninForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          value={props.email || ""}
          onChange={props.handleChange}
          type="email"
          name="email"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          value={props.password || ""}
          onChange={props.handleChange}
          type="password"
          name="password"
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary btn-block">
        Sign In
      </button>
    </form>
  );
};
