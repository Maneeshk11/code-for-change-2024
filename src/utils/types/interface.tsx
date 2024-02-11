

export interface Restaurant {
    _id: string;
    name: string;
    location: string;
    logo: string;
}

export interface UserInfo {
    _id: string;
    email: string;
    sub: string;
    name: string;
    picture: string;
}

export type Onboarding = {
    age: string;
    weight: string;
    height?: string; // Optional property
    activeness?: string; // Optional property
    goal?: string; // Optional property
    gender?: string; // Optional property
    [key: string]: string | undefined;
};