import { SVGProps } from 'react';

export default function ChakraLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="48px"
      height="46px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#fff" // Set stroke color to white
    >
      <path
        d="M10.0495 2.52979L4.02953 6.45979C2.09953 7.71979 2.09953 10.5398 4.02953 11.7998L10.0495 15.7298C11.1295 16.4398 12.9095 16.4398 13.9895 15.7298L19.9795 11.7998C21.8995 10.5398 21.8995 7.72979 19.9795 6.46979L13.9895 2.53979C12.9095 1.81979 11.1295 1.81979 10.0495 2.52979Z"
        stroke="#fff" // Set stroke color to white
        strokeWidth="1.5" // Corrected attribute name
        strokeLinecap="round" // Corrected attribute name
        strokeLinejoin="round" // Corrected attribute name
      />
      <path
        opacity="0.4"
        d="M5.62914 13.0801L5.61914 17.7701C5.61914 19.0401 6.59914 20.4001 7.79914 20.8001L10.9891 21.8601C11.5391 22.0401 12.4491 22.0401 13.0091 21.8601L16.1991 20.8001C17.3991 20.4001 18.3791 19.0401 18.3791 17.7701V13.1301"
        stroke="#fff" // Set stroke color to white
        strokeWidth="1.5" // Corrected attribute name
        strokeLinecap="round" // Corrected attribute name
        strokeLinejoin="round" // Corrected attribute name
      />
      <path
        opacity="0.4"
        d="M21.4004 15V9"
        stroke="#fff" // Set stroke color to white
        strokeWidth="1.5" // Corrected attribute name
        strokeLinecap="round" // Corrected attribute name
        strokeLinejoin="round" // Corrected attribute name
      />
    </svg>
  );
}
