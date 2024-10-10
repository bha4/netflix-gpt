const Login = () => {
  return (
    <div className="relative flex items-center justify-center h-screen bg-gray-100">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_small.jpg"
        alt="Bg-image"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <form className="relative z-10 bg-transparent max-w-sm w-full hover:shadow-2xl ">
        <h2 className="text-2xl font-bold text-red-50 text-center mb-6">Sign In</h2>

        <div className="mb-4">
          <label className="block text-white font-bold  mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full p-3 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-full p-3 border rounded-lg"
          />
        </div>
        <button className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-900 transition duration-200">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
