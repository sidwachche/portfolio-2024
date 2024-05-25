import * as NextMdx from '@next/mdx'


const withMDX = NextMdx.default({
    extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
    },
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

export default withMDX(nextConfig);