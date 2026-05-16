export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    res.status(201).json({
      message: "User registered successfully",
      user: {
        name,
        email,
      },
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      email === "admin@gmail.com" &&
      password === "123456"
    ) {
      return res.json({
        success: true,
        token: "fake-jwt-token",
        user: {
          name: "Vaishnavi",
          email,
        },
      });
    }

    return res.status(401).json({
      success: false,
      message: "Invalid credentials",
    });
  } catch (error) {
    res.status(500).json(error);
  }
};