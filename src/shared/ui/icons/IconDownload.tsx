import { IconProps } from "./types";

export const IconDownload = ({ className }: IconProps) => {
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
        d="M12.5 3C12.9024 3 13.2286 3.32671 13.2286 3.72973V13.6437L15.8705 10.9975C16.1551 10.7125 16.6164 10.7125 16.9009 10.9975C17.1854 11.2825 17.1854 11.7445 16.9009 12.0295L13.0152 15.9214C12.8785 16.0583 12.6932 16.1351 12.5 16.1351C12.3068 16.1351 12.1215 16.0583 11.9848 15.9214L8.09911 12.0295C7.81458 11.7445 7.81458 11.2825 8.09911 10.9975C8.38363 10.7125 8.84494 10.7125 9.12946 10.9975L11.7714 13.6437V3.72973C11.7714 3.32671 12.0976 3 12.5 3ZM4.72857 14.6757C5.13095 14.6757 5.45714 15.0024 5.45714 15.4054L5.45714 18.3243C5.45714 18.996 6.0008 19.5405 6.67143 19.5405H18.3286C18.9992 19.5405 19.5429 18.996 19.5429 18.3243V15.4054C19.5429 15.0024 19.8691 14.6757 20.2714 14.6757C20.6738 14.6757 21 15.0024 21 15.4054V18.3243C21 19.8021 19.804 21 18.3286 21H6.67143C5.19604 21 4 19.8021 4 18.3243L4 15.4054C4 15.0024 4.32619 14.6757 4.72857 14.6757Z"
      />
    </svg>
  );
};