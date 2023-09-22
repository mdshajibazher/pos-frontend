/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_API_URL : "http://pos-api.test",
        NEXTAUTH_SECRET: "say_lalisa_love_me_lalisa_love_me_hey"
    }
}

module.exports = nextConfig
