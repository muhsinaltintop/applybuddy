const API_KEY: string | undefined = process.env.NEXT_PUBLIC_STRAPI_API_KEY;

const BASE_URL: string = "http://77.37.124.127:1337/api";

interface FetchOptions extends RequestInit {
  headers?: Record<string, string>;
}

const fetchData = async (endpoint: string, options: FetchOptions = {}): Promise<FetchOptions> => {
  const defaultOptions: FetchOptions = {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      'Referrer-Policy': 'no-referrer-when-downgrade',
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  const finalOptions: FetchOptions = { ...defaultOptions, ...options };
  const url: string = `${BASE_URL}${endpoint}`;

  try {
    const res: Response = await fetch(url, finalOptions);
    if (!res.ok) {
      throw new Error(`Error: ${res.status} ${res.statusText}`);
    }
    const data: FetchOptions = await res.json();
    console.log(typeof(data), data);
    
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

interface User {
  id: number;
  username: string;
  email: string;
  // Diğer kullanıcı alanları...
}

const getUsers = async (): Promise<User[]> => {
  const data = await fetchData('/users');
//   console.log(data);
  return data as User[];

  
};

interface InquiryData {
  username: string;
  email: string;
  // Diğer sorgu alanları...
}

const createUser = async (inquriData: InquiryData): Promise<User> => {
  const data = await fetchData("/users", {
    method: "POST",
    body: JSON.stringify(inquriData),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return data as User;
};

export {
  getUsers,
  createUser
};
