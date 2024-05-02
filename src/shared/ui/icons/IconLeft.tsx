import { IconProps } from "./types";

export const IconLeft = ({ className }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="#08E8DE"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.49739 11.9999C2.49739 11.7815 2.58344 11.572 2.73663 11.4176L9.27114 4.82929C9.59013 4.50768 10.1073 4.50768 10.4263 4.82929C10.7453 5.1509 10.7453 5.67234 10.4263 5.99395L5.28617 11.1764L20.7396 11.1764C21.1907 11.1764 21.5564 11.5451 21.5564 11.9999C21.5564 12.4547 21.1907 12.8235 20.7396 12.8235L5.28617 12.8235L10.4263 18.0059C10.7453 18.3275 10.7453 18.8489 10.4263 19.1705C10.1073 19.4922 9.59013 19.4922 9.27114 19.1705L2.73663 12.5822C2.58344 12.4278 2.49739 12.2183 2.49739 11.9999Z"
      />
    </svg>
  );
};