import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 160 26" {...props}>
      <path
        fill="#604222"
        d="M1.5 24.1c-.1-.4-.1-.9-.2-1.4-.1-.6-.1-1.2-.2-1.8 0-.5-.1-.9-.1-1.4-.1-.6-.1-1.2-.2-1.8 0-.5-.1-1-.1-1.4-.1-.6-.1-1.2-.2-1.8 0-.5-.1-.9-.1-1.4-.1-.6-.1-1.2-.2-1.8 0-.5-.1-1-.1-1.4C.1 9.2.1 8.6 0 8c0-.3 0-.6.1-.8 0-.1.1-.2.1-.3 0-.6.1-1.1.2-1.6C.9 3.4 2 2.1 3.6 1.2 4.6.6 5.7.3 6.8.1c1.7-.2 3.4.1 5 .8 1.5.7 2.6 1.8 3.3 3.3.4.7.6 1.5.6 2.4 0 .4 0 .8.1 1.2v.8c0 .4-.1.7-.1 1.1-.1.6-.1 1.2-.2 1.9 0 .5-.1 1-.1 1.4-.1.6-.1 1.2-.2 1.8 0 .5-.1.9-.1 1.4-.1.5-.1 1.2-.2 1.8 0 .5-.1 1-.1 1.4-.1.6-.1 1.2-.2 1.8 0 .5-.1.9-.1 1.4-.1.5 0 1-.2 1.5 0 0 0 .1-.1.1-.4 1-1.5 1.7-2.5 1.7H4c-.7 0-1.4-.3-1.9-.8-.3-.2-.5-.6-.6-1zM9.8 4.8c0 .1-.1.2-.1.3 0 .2-.1.3-.1.5v.2c.2.1.3.3.4.5 0 0 0 .1.1.1 0 0 .1 0 .1-.1.1-.2.2-.4.4-.7.2-.3.3-.6.5-.9 0-.1.1-.1 0-.2s-.3-.1-.4-.1c-.1 0-.2-.1-.3-.1 0 0-.1 0-.1-.1-.3.1-.3.1-.4.2 0 .2-.1.3-.1.4zm.7 1.8c-.1.1-.2.2-.3.4-.1.1-.1.2 0 .3 0 0 0 .1.1 0 .2-.1.4-.2.5-.3 0 0 .1 0 .1-.1.1.1.1.1.1 0-.1-.1-.1-.3-.3-.4-.2-.1-.2 0-.2.1zM9 5.5c.2.1.2.1.2-.1.1-.3.1-.6.2-.9.1-.1.1-.2.1-.3-.1 0-.3.1-.4.1-.1.1-.2.2-.2.3v.8s0 .1.1.1zm-4 .6c0-.1.1-.1 0-.2-.2-.2-.5-.1-.7 0-.1.2-.2.3-.3.5-.1.2 0 .3.2.3h.1c.1.1.3.2.4.2.1.1.2 0 .2-.1 0-.3.1-.5.1-.7zm1 1.1c-.1.2-.1.2.1.3.5.3 1 .5 1.4.9.1.1.2.1.3 0 .5-.3 1-.5 1.5-.7.1 0 .2-.1.3-.1 0 0 .1 0 .1-.1 0-.4 0-.8-.3-1.2-.1-.2-.4-.4-.7-.4-.1 0-.3 0-.4.1-.3.1-.6 0-.7-.3l-.2-.3c0-.1 0-.1-.1-.1-.1-.1-.3-.2-.5-.2-.4 0-.7.2-1 .4-.3.4-.5.9-.6 1.3 0 .2 0 .3.2.3h.2c.2-.4.5-.6.9-.8.2 0 .3 0 .5.1.4.1.6.4.9.7.1 0 .1.1 0 .2-.3-.1-.5-.3-.8-.4 0 0-.1-.1-.2-.1-.1-.1-.3-.1-.5 0-.1.1-.3.2-.4.4zm2.1-3.1c-.3.2-.6.1-.9 0 0 0-.1-.1-.2-.1-.2 0-.3 0-.3.2-.1 0-.1 0-.2.1-.1.2-.2.3-.3.5.1 0 .2 0 .2-.1.6-.1 1.2 0 1.5.6.1.4.3.3.5.2.1 0 .1-.1.1-.2v-.5-.2c0-.3.1-.5.4-.6.1 0 .1 0 .2-.1.1 0 .3-.1.4-.1.1 0 .1 0 .1-.1s0-.1-.1-.1c-.3-.2-.7-.2-1 .1-.1.1-.2.3-.4.4zm2-.5l.3-.3c.1-.2 0-.5-.3-.5h-.3c-.3.1-.6 0-.8-.3 0 0-.1-.1-.1-.2-.2-.1-.3-.2-.5 0-.1 0-.1.1-.2.2-.3.3-.5.7-.7 1-.1.1 0 .3.2.2.1 0 .2 0 .2-.1.1-.1.3-.2.4-.3.3-.3.7-.3 1.1-.2.2.1.4.3.5.6 0 .1.1.2.2.1v-.2zm1.3.4c-.1-.1-.1-.2-.2-.2-.2-.2-.3-.2-.5 0-.1.1-.2.2-.1.3 0 .1.2.1.3.1l.6.3c.2.1.2.2.1.4-.1.1-.2.3-.2.4-.2.2-.3.5-.4.7-.1.1-.1.2.1.3.2.1.4.3.5.5 0 .1.1.1.1.1.3-.1.7-.3 1-.4.1 0 .1 0 0-.1-.1-.2-.2-.4-.1-.6 0-.1.1-.2.2-.3.1-.2.3-.4.4-.6.1-.1.1-.2 0-.3-.1-.2-.3-.2-.4-.1-.7-.1-1.1-.1-1.4-.5zm-4.9-.7c.2-.4.3-.8.5-1.1 0-.1.1-.1 0-.2 0-.1-.1-.1-.2-.1-.2 0-.5-.1-.8-.1-.1 0-.2 0-.2.2-.2.2-.2.4-.3.7-.1.2-.1.4-.1.7 0 .1-.1.2 0 .3v.4c0 .2.2.4.4.4.1 0 .2-.1.3-.2.1-.3.3-.6.4-1zm-1.9.2c-.2-.2-.4-.3-.6-.2-.2 0-.4.1-.5.3-.6.6-.9 1.5-.9 2.4 0 .3 0 .2.3.3.1 0 .2.1.3.1.3.2.4.1.4-.2.1-.2.3-.4.5-.6.3-.2.7-.2 1-.1.1 0 .2 0 .2-.1l.3-.3c.1 0 .2 0 .2-.1h-.1c-.4-.1-.7-.3-.9-.7-.1-.3-.1-.5-.2-.8zm5.1 5c-.3.2-.7.4-1 .6-.1.1-.1.1 0 .2l1.8 1.5c1.6 1.6 2.9 3.6 3.8 5.7 0 0 0 .1.1.1v-.1c0-.5.1-1.1.1-1.6 0-.4.1-.7.1-1.1 0-.3.1-.6.1-1 .1-.8.1-1.6.2-2.4 0-.8.1-1.7.1-2.5.1-.7-.6-1.3-1.3-1.1-.5.1-1.1.3-1.6.5-.8.4-1.6.7-2.4 1.2zm-5.8-1V12c-.1.5-.6.8-1.1.7-.5-.1-.8-.5-.8-.9V7.1c0-.1 0-.2-.1-.2-.5-.1-1 .3-1.1.8v.7c.1.8.2 1.6.2 2.4.1.9.2 1.8.2 2.8.1.8.1 1.6.2 2.4.1.9.2 1.8.2 2.8.1.8.1 1.6.2 2.5.1.7.1 1.4.2 2.1 0 .4.1.8.4 1.1.4.6 1 .8 1.7.8h7.4c.9-.1 1.7-.7 1.8-1.6.1-.6.1-1.2.2-1.8.1-.9.3-1.9.4-2.8 0-.3.1-.6 0-.9-1.4-4-3.9-7.2-7.6-9.4l-.2-.1v1.7c0 .5-.4.9-1 .9-.5 0-.9-.4-.9-1v-.5-2c0-.1 0-.1-.1-.1.1-.1 0-.2-.2-.2zm1-4.5v-.2c.1-.4.2-.8.4-1.2.1-.3.3-.4.6-.3.5 0 .9.1 1.4.2.4 0 .6.2.7.6C7.9 2 8 2 8 2c.5-.4 1-.4 1.4.1.2.2.3.2.5.2.6-.1.9.1 1.1.7 0 .1.1.1.1.1.2.1.4.2.6.4.1.1.2.2.4.3.2.1.4.1.6.1.2 0 .4.1.5.2.3.3.4.6.4.9 0 .1 0 .1-.1.2-.2.2-.3.4-.5.6V6c.1.1.2.2.4.1.5-.1 1-.1 1.4.1 0 0 .1.1.1 0v-.1c0-.3-.1-.6-.2-.9-.4-1.4-1.3-2.4-2.5-3.2C10.6 1 8.9.6 7 .8c-1.4.2-2.7.7-3.8 1.6-1.1.9-1.9 2-2.2 3.4v.4h.1c.3-.1.6-.2.9-.1.1 0 .1 0 .1-.1.1-.7.3-1.3.5-2 .2-.3.4-.7.7-1 .3-.3.6-.4 1-.3.2 0 .4.1.6.3zM2.7 9.4v2.3c0 .2.1.3.3.3.2 0 .3-.1.3-.3V7.3c0-.1 0-.1-.1-.1-.1-.1-.2-.1-.3-.2-.2 0-.2 0-.2.1v2.3zM5 8v2.3c0 .2.1.3.3.3.2 0 .3-.1.3-.3V8.5v-.1c-.2-.2-.3-.3-.6-.4zm2.5-5.5v-.1s0-.1-.1-.1-.1.1-.1.1c-.1.3-.3.6-.4 1 0 .1-.1.1 0 .2s.2.1.3 0c.1 0 .1-.1.1-.2 0-.2.1-.4.2-.6 0-.1.1-.2 0-.3z"
      />
      <path
        fill="#F6E6CD"
        d="M4 7.5c.1.1.3.1.4.2.1 0 .1.1.1.2v2.5c0 .5.4 1 .9 1s1-.4 1-.9V8.6c.1 0 .1 0 .2.1 3.7 2.2 6.2 5.3 7.5 9.4.1.3 0 .6 0 .9-.1.9-.3 1.9-.4 2.8-.1.6-.1 1.2-.2 1.8-.1.9-.9 1.6-1.8 1.6H4.3c-.7 0-1.3-.3-1.7-.8-.2-.3-.4-.7-.4-1.1-.1-.7-.1-1.4-.2-2.1-.1-.8-.1-1.6-.2-2.5-.1-.9-.2-1.8-.2-2.8-.1-.8-.1-1.6-.2-2.4-.1-.9-.2-1.8-.2-2.8C1 10 .9 9.2.8 8.4c0-.2-.1-.5 0-.7.1-.5.6-.9 1.1-.9.1 0 .2.1.2.2v4.7c0 .5.3.9.8.9.5.1.9-.2 1.1-.7V7.5zm4 13.9H6.7c-.4 0-.6.2-.5.6 0 .3.2.7.5.9.6.5 1.2.6 1.9.4.7-.2 1.1-.6 1.2-1.3.1-.4-.1-.6-.5-.6H8zm-2.3-1.6c0-.6-.5-1.1-1.1-1.1-.6 0-1.1.5-1.1 1.1 0 .6.5 1.1 1.1 1.1.6.1 1.1-.4 1.1-1.1 0 .1 0 .1 0 0zm5.5 1.2c.6 0 1.1-.5 1.1-1.1 0-.6-.5-1.1-1.1-1.1-.6 0-1.1.5-1.1 1.1 0 .6.5 1 1.1 1.1zM9.7 8.5c.8-.5 1.6-.8 2.4-1.1.5-.2 1-.4 1.6-.5.7-.2 1.4.3 1.3 1.1-.1.8-.1 1.6-.2 2.4-.1.8-.1 1.6-.2 2.4 0 .3-.1.6-.1 1-.2-.3-.4-.7-.6-1-.7-1.1-1.5-2-2.5-2.9-.4-.3-.7-.6-1.1-.9-.1-.2-.4-.3-.6-.5z"
      />
      <path
        fill="#E3BC95"
        d="M4.9 3c-.2-.2-.4-.3-.6-.3-.4-.1-.7.1-1 .3-.3.3-.5.7-.7 1-.2.6-.4 1.3-.5 2 0 .1 0 .1-.1.1-.3 0-.6 0-.9.1H1c0-.2 0-.3.1-.5.3-1.4 1.1-2.5 2.2-3.4C4.3 1.5 5.6 1 7 .8 8.9.6 10.6 1 12.2 2c1.2.8 2 1.8 2.5 3.2.1.3.2.6.2.9v.1h-.1c-.4-.2-.9-.2-1.3-.1-.2.1-.3 0-.4-.1-.1-.1-.1-.1-.1-.2.2-.2.3-.4.5-.6 0-.1.1-.1.1-.2 0-.4-.2-.7-.4-.9-.1-.1-.3-.2-.5-.2s-.4 0-.6-.1c-.2 0-.3-.1-.4-.3-.1-.2-.3-.3-.6-.4L11 3c-.2-.6-.5-.8-1.1-.7-.2 0-.4 0-.5-.2C9 1.6 8.5 1.6 8 2l-.1.1c-.1-.5-.4-.6-.7-.6-.5-.1-.9-.2-1.4-.2-.3 0-.5.1-.6.3-.1.4-.2.8-.2 1.2-.1.1-.1.1-.1.2z"
      />
      <path
        fill="#E4BD96"
        d="M9.7 8.5c.2.2.5.3.7.5.4.3.8.6 1.1.9.9.9 1.8 1.8 2.5 2.9.2.3.4.6.6 1 0 .4-.1.7-.1 1.1 0 .5-.1 1.1-.1 1.6v.1c-.1 0-.1 0-.1-.1-.9-2.1-2.2-4-3.8-5.7-.5-.6-1.1-1.1-1.8-1.5-.1-.1-.1-.1 0-.2.3-.2.7-.4 1-.6z"
      />
      <path
        fill="#7E3629"
        d="M7.9 7.3c.1-.1.1-.2 0-.2-.3-.3-.6-.5-.9-.7-.2 0-.3-.1-.5-.1 0-.1.1-.1.1-.2.2-.2.5-.1.7 0 .1.1.3.2.4.2.2.1.3.1.5.1s.4-.1.5-.3c.3 0 .3 0 .5.2.1.2.2.4.3.7 0 .3-.1.5-.1.8-.5.2-1.1.4-1.5.7-.1.1-.2.1-.3 0-.5-.4-1-.7-1.5-.9-.2-.2-.2-.2-.1-.3h.1c.3-.1.7-.1.9.1.1.1.3.2.5.3.3 0 .4-.1.4-.4z"
      />
      <path
        fill="#F47645"
        d="M2.7 9.4V7.1c0-.1 0-.1.2-.1.1 0 .2.1.4.1.1 0 .1.1.1.1v4.4c-.1.3-.2.4-.4.4s-.3-.1-.3-.3V9.4z"
      />
      <path
        fill="#B66F3D"
        d="M9.4 7.8c0-.3.1-.5.1-.8 0-.3-.1-.5-.3-.8-.2-.1-.2-.1-.4 0-.1.2-.3.3-.5.3s-.3 0-.5-.1c-.1 0-.3-.1-.4-.2-.2-.1-.5-.2-.7 0-.1 0-.1.1-.1.2-.5.1-.8.3-1 .7 0 .1-.1.1-.2 0 .1-.4.3-.8.6-1.2.1-.1.2-.1.3-.1.1 0 .2.1.2 0 .2 0 .2-.1.3-.3 0-.1.1-.2.2-.2s.2.1.3.1l.2.3c.2.3.5.4.8.3.1 0 .3-.1.4-.1.4 0 .6.1.8.4.2.4.3.8.3 1.2 0 .1 0 .1-.1.1-.2.1-.2.1-.3.2z"
      />
      <path
        fill="#3F7C3A"
        d="M13.1 4.5c.1.1.1.2 0 .3-.1.2-.3.4-.4.6-.1.1-.1.2-.2.3-.1.2 0 .4.1.6v.1c-.3.1-.7.2-1 .4-.1 0-.1 0-.1-.1-.1-.2-.2-.4-.5-.5-.1-.1-.2-.2-.1-.3.2-.2.3-.5.4-.7.1.1.3.2.5.1.1 0 .2-.1.4-.1.3-.2.6-.5.9-.7zm-1.5.9c-.2 0-.4.1-.5.2-.1.1-.1.2-.1.3 0 .1.1.1.2.1.2 0 .3-.1.4-.1.1-.1.2-.1.2-.3.1-.1 0-.2-.2-.2zm.1 1.1c.1 0 .3-.1.3-.2s-.1-.2-.2-.2c-.2 0-.3.1-.3.2 0 .2.1.2.2.2zM5.7 4.9h.1c0 .1-.1.2-.2.2-.1.2-.2.3-.2.4-.1.1-.2.1-.3 0-.4-.1-.7-.1-1 .1-.2.2-.4.4-.5.6 0 .3-.1.3-.4.2v-.5c0-.1.1-.3.1-.4.1 0 .2 0 .3-.1.1-.1.1-.2 0-.3v-.2l.1-.1c.1.1 0 .2.1.3 0 .1.1.2.2.2s.1-.1.2-.2c.1-.2.1-.4.1-.6.3.1.6.2.9.4.1.2.2.2.5 0zm-.8.1c0-.1-.1-.3-.3-.3-.1 0-.2.1-.2.3 0 .2.1.2.2.2.2.1.3 0 .3-.2z"
      />
      <path
        fill="#ABE5A5"
        d="M2.9 6.3c-.3-.1-.3 0-.3-.3 0-.9.3-1.7.9-2.4.1-.2.3-.3.5-.3.3-.1.5 0 .6.2h-.1c-.6.2-1 .7-1.2 1.3-.2.1-.2.2-.2.4 0 .1-.1.2-.1.4-.1.2-.1.4-.1.7zM5.3 3.7v-.3-.1c.1-.3.3-.7.5-1 .1-.1.2-.1.4-.2H7c-.2.4-.3.8-.5 1.1v.1c-.1 0-.1 0-.2.1s-.3.2-.4.2c-.2.1-.4.2-.6.1z"
      />
      <path fill="#F47645" d="M5 8l.6.3c.1 0 0 .1 0 .1v1.8c0 .2-.1.3-.3.3-.2 0-.3-.1-.3-.3V8z" />
      <path
        fill="#6BB066"
        d="M10.5 4.5c.1 0 .3.1.4.1.1 0 0 .1 0 .2-.2.3-.3.6-.5.9-.1.2-.2.4-.4.7 0 0 0 .1-.1.1l-.1-.1c.1-.3 0-.5-.2-.6-.1 0-.1-.1 0-.2.1-.2.1-.3.2-.5h.1c.1-.2.3-.4.6-.6 0 0 .1 0 0 0zM13.1 4.5c-.3.2-.6.5-.9.6-.1.1-.2.1-.4.1-.2.1-.4 0-.5-.1 0-.2.1-.3.2-.4.1-.2.1-.3-.1-.4l-.6-.3c.1-.2.3-.2.4-.1.1 0 .1.1.2 0 .3.4.8.5 1.3.4.1 0 .3 0 .4.2z"
      />
      <path
        fill="#3F7C3A"
        d="M10.1 3.6c0 .1 0 .2-.1.2s-.2 0-.2-.1c-.1-.3-.2-.5-.5-.6-.3-.1-.7-.1-1 .2-.1.1-.3.2-.4.4 0 .1-.1.1-.2.1-.2 0-.3-.1-.2-.2.2-.4.3-.8.6-1.1h.2c.2 0 .3 0 .4.2.2.2.4.3.6.3.4.1.7.2.8.6zM8.5 4.8v.5c0 .1 0 .2-.1.2-.2.1-.4.2-.5-.1-.3-.6-.9-.8-1.5-.6-.1 0-.1 0-.2.1.1-.2.2-.3.3-.5 0-.1.1-.1.2-.1s.2 0 .4.1c.2 0 .4.1.6.3s.3.2.6.1h.2z"
      />
      <path
        fill="#C3785A"
        d="M7.4 5.5c-.1 0-.2-.1-.3-.1-.1 0-.2.1-.2.2 0 .2-.1.3-.3.3h-.2c-.1 0-.2 0-.3.1-.4.3-.6.7-.6 1.2-.2 0-.3-.1-.2-.3.1-.5.3-.9.6-1.3.3-.3.6-.5 1-.4.2 0 .3.1.5.2-.1-.1 0 0 0 .1z"
      />
      <path
        fill="#6BB066"
        d="M3.3 4.8c.2-.6.5-1.1 1.2-1.3h.1c.1.3.1.5.3.8.1.4.4.6.8.6-.3.2-.4.2-.6 0-.2-.2-.5-.3-.8-.4v-.1c0-.2-.2-.3-.3-.2-.2.1-.3.2-.3.4v.3s-.1 0-.1.1c-.1-.1-.2-.2-.3-.2zM8.5 4.8c-.1 0-.2 0-.2.1-.2 0-.5 0-.6-.2-.2-.3-.4-.4-.7-.4-.1 0-.2 0-.4-.1.1-.1.2-.2.4-.2.1 0 .2.1.3.1.3.1.6.1.9 0 .1 0 .2 0 .3-.1.1-.1.2-.1.2-.2.1 0 .3 0 .4.1 0 0-.1 0-.2.1-.3.1-.4.3-.4.6v.2zM10.1 3.6c-.1-.4-.4-.5-.8-.6-.2 0-.4-.1-.5-.4-.1-.1-.3-.1-.5-.2h-.2l.2-.2c.2-.1.4-.1.5 0 .1.2.2.3.3.3.2.3.5.3.8.3h.3c.2 0 .4.3.3.5-.1.1-.2.2-.4.3zM5.3 3.7c.2.1.4 0 .5-.1.2 0 .4-.1.5-.2 0 0 .1-.1.2-.1-.1.4-.3.7-.5 1-.1 0-.2.2-.3.2-.2 0-.4-.1-.4-.4v-.4z"
      />
      <path
        fill="#B66F3D"
        d="M7.9 7.3c0 .3-.1.4-.4.3-.2 0-.3-.2-.5-.3-.2-.2-.5-.2-.8-.1h-.1c0-.2.2-.3.4-.4.1.2.2.3.4.1.1 0 .1 0 .2.1.3 0 .5.2.8.3z"
      />
      <path
        fill="#EED1AF"
        d="M7 2.2h-.8c-.1 0-.2 0-.3.2-.2.2-.4.6-.5.9v.1c0-.2.1-.5.1-.7.1-.3.1-.5.2-.7 0-.1.1-.2.2-.2.3 0 .6.1.9.1.1 0 .2 0 .2.1.1.1 0 .1 0 .2z"
      />
      <path
        fill="#C3785A"
        d="M4.3 6.7h-.1c-.2 0-.3-.1-.2-.3.1-.2.2-.3.3-.4.2-.2.5-.3.7-.1.1.1 0 .1 0 .2-.4 0-.6.3-.7.6z"
      />
      <path
        fill="#ABE5A5"
        d="M9.1 3.9c-.1-.1-.3-.1-.4-.1-.1.1-.2.1-.3.2 0 .1-.1.1-.3.1.2-.1.3-.3.4-.4.3-.3.7-.3 1-.1l.1.1c0 .1-.1.1-.1.1-.1 0-.3.1-.4.1z"
      />
      <path
        fill="#6BB066"
        d="M7.5 2.5c0 .1 0 .1-.1.2-.1.2-.1.4-.2.7 0 .1 0 .1-.1.2h-.3c-.1 0 0-.1 0-.2.2-.4.4-.7.6-1 0 0 0-.1.1-.1l.1.1c-.1 0-.1.1-.1.1z"
      />
      <path fill="#7E3629" d="M4.3 6.7c.1-.3.3-.6.7-.6 0 .2-.1.4-.1.7 0 .1-.1.2-.2.1s-.3-.1-.4-.2z" />
      <path
        fill="#EED1AF"
        d="M9 5.5c-.1 0-.1-.1-.1-.1v-.8c0-.1.1-.2.2-.2.1-.1.3-.1.4-.2 0 .1 0 .2-.1.3-.1 0-.2 0-.2.1-.1.1-.1.2-.1.3 0 .2 0 .4-.1.6z"
      />
      <path fill="#6BB066" d="M2.9 6.3c0-.3 0-.5.1-.7 0-.1.1-.2.1-.4 0 .1.1.2.1.3 0 .1-.1.3-.1.4v.5s-.1-.1-.2-.1z" />
      <path
        fill="#ABE5A5"
        d="M11.4 4c-.1.1-.1 0-.2 0-.2 0-.3 0-.4.1-.1 0-.2 0-.3-.1 0-.1 0-.2.1-.3.2-.2.3-.2.5 0l.3.3z"
      />
      <path fill="#7E3629" d="M10.8 7.1c-.2.1-.4.2-.5.3h-.1v-.3c.1-.1.2-.3.3-.4.2 0 .2.2.3.4z" />
      <path
        fill="#ABE5A5"
        d="M9 5.5c.1-.2.1-.4.1-.5 0-.1 0-.2.1-.3.1-.1.1-.1.2-.1 0 .2-.1.5-.2.8 0 .1 0 .2-.2.1zM10.5 4.5c.1 0 0 0 0 0-.3.2-.5.4-.7.6h-.1c0-.1 0-.2.1-.2s.1-.1.2-.2l.3-.3c.1-.1.2 0 .2.1z"
      />
      <path fill="#B66F3D" d="M10.8 7.1c0-.2-.1-.3-.3-.4 0-.2.1-.2.2-.1s.2.2.3.4v.1c-.1-.1-.2 0-.2 0z" />
      <path fill="#EED1AF" d="M10.3 4.4c-.1 0-.2.2-.3.3 0 .1-.1.2-.2.2 0-.1.1-.3.1-.4.1-.2.1-.2.4-.1-.1-.1-.1 0 0 0z" />
      <path fill="#C3785A" d="M6.9 6.9c-.2.2-.3.2-.5 0 .2-.1.4-.2.5 0z" />
      <path fill="#ABE5A5" d="M9.7 5.1z" />
      <path fill="#EED1AF" d="M9.8 4.9z" />
      <path fill="#B66F3D" d="M6 7.2c0 .1 0 .1 0 0z" />
      <path
        fill="#EED1AF"
        d="M7.9 17.3h2.6c.2 0 .2.1.3.2.1.2.1.3 0 .5 0 .1-.1.2-.3.2H5.4c-.2 0-.3 0-.3-.2-.1-.1-.1-.3 0-.5 0-.1.1-.2.3-.2h2.5zM7.9 14.1h2.6c.1 0 .2.1.3.2.1.2.1.4 0 .5 0 .1-.1.2-.3.2H5.4c-.2 0-.3-.1-.3-.3v-.4c0-.1.1-.2.3-.2h2.5zM7.9 15.7h2.5c.3 0 .3.1.4.3 0 .1 0 .3-.1.4 0 .1-.1.1-.2.1H5.3c-.2 0-.3-.1-.3-.3v-.3c0-.2.1-.3.4-.3l2.5.1z"
      />
      <path
        fill="#604222"
        d="M7.9 21.4h1.3c.4 0 .6.2.5.6-.1.7-.6 1.1-1.2 1.3-.7.2-1.3.1-1.9-.4-.3-.2-.4-.5-.5-.9-.1-.4.1-.6.5-.6h1.3zm0 .8H7c-.2 0-.2.1-.2.3 0 .1.1.2.2.3.4.4 1.2.4 1.7.1.1-.1.2-.2.2-.3.1-.3 0-.4-.3-.4-.2-.1-.4 0-.7 0z"
      />
      <path
        fill="#614322"
        d="M5.7 19.8c0 .6-.5 1.1-1.1 1.1-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1.6 0 1.1.5 1.1 1.1zm-1.5-.6c-.1 0-.2.1-.2.2s.1.2.2.2.2-.1.2-.2-.1-.2-.2-.2zM11.2 21c-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1.6 0 1.1.5 1.1 1.1 0 .6-.5 1.1-1.1 1.1zm-.4-1.8c-.1 0-.2.1-.2.2-.1.2.1.3.3.3.1 0 .2-.1.2-.2-.1-.2-.2-.3-.3-.3z"
      />
      <path
        fill="#604222"
        d="M11.6 5.4c.2 0 .3.1.3.2s-.1.2-.2.3c-.1.1-.2.1-.4.1-.1 0-.2 0-.2-.1s0-.2.1-.3c.1-.1.2-.2.4-.2zM11.7 6.5c-.2 0-.2-.1-.2-.2s.1-.2.3-.2c.1 0 .3.1.2.2 0 .2-.1.2-.3.2zM3.7 4.9v-.3c0-.2.1-.3.2-.4.2-.1.3 0 .3.2v.1c0 .2 0 .4-.1.6 0 .1-.1.2-.2.2s-.2-.1-.2-.2v-.2z"
      />
      <path
        fill="#614322"
        d="M3.3 5.5c-.1-.1-.1-.2-.2-.3 0-.2 0-.3.2-.4.1 0 .2.1.3.1v.2c0 .1.1.2 0 .3-.1.1-.2.1-.3.1z"
      />
      <path fill="#604222" d="M4.9 5c0 .2-.1.3-.2.3s-.2-.1-.2-.2c0-.2.1-.3.2-.3s.2.1.2.2z" />
      <path
        fill="#FB5958"
        d="M7.9 22.1h.7c.3 0 .4.1.3.4 0 .1-.1.2-.2.3-.4.4-1.3.4-1.7-.1-.1-.1-.1-.2-.2-.3 0-.2 0-.3.2-.3H7.9z"
      />
      <path
        fill="#FEFEFE"
        d="M4.2 19.2c.1 0 .2.1.2.2s-.1.2-.2.2-.2-.1-.2-.2c-.1-.1 0-.2.2-.2zM11 19.5c0 .1-.1.3-.3.2-.1 0-.2-.1-.2-.2s.1-.3.2-.3c.2 0 .3.1.3.3z"
      />
      <path
        fill="none"
        d="M109 9.9c-.1-.2-.3-.3-.6-.3s-.5.1-.6.4c-.1.3-.1.9-.1 2.1v10h1.4V11.8c0-1 0-1.6-.1-1.9zM65.4 19.7c.3 0 .5-.1.6-.3V15c-.7.5-1.1 1-1.3 1.3-.1.4-.2.9-.2 1.5 0 .8.1 1.3.2 1.5.2.3.4.4.7.4zM65.1 21.9c-.1 0-.2.1-.3.1h1.4v-1.3c-.3.5-.7.9-1.1 1.2zM77.3 19.7c.3 0 .5-.1.6-.3.1-.2.1-.8.1-1.7v-6.2c0-.8 0-1.3-.1-1.5-.1-.2-.3-.4-.6-.4s-.5.1-.5.3c-.1.2-.1.7-.1 1.5v6.4c0 .8 0 1.3.1 1.5 0 .3.2.4.5.4zM119.9 19.7c.3 0 .5-.1.6-.3.1-.2.1-.6.1-1.4v-3c-.7.5-1.1 1-1.3 1.3-.1.4-.2.9-.2 1.5 0 .8 0 1.3.1 1.5.2.3.4.4.7.4zM42.8 11.4c0-.8 0-1.3-.1-1.5-.1-.2-.2-.3-.5-.3s-.5.1-.6.3c-.1.2-.1.7-.1 1.5v1.1h1.3v-1.1zM119.7 21.9c-.1.1-.2.1-.3.1h1.4v-1.3c-.4.5-.7.9-1.1 1.2zM155.5 11.4c0-.8 0-1.3-.1-1.5-.1-.2-.2-.3-.5-.3s-.5.1-.6.3c-.1.2-.1.7-.1 1.5v1.1h1.3v-1.1zM132.4 9.9c-.1-.2-.3-.3-.6-.3s-.5.1-.6.4c-.1.3-.1.9-.1 2.1v10h1.4V11.8c0-1 0-1.6-.1-1.9zM76.6 20.9l-.3 1.1H78c-.1 0-.1 0-.2-.1-.4-.2-.8-.5-1.2-1zM54 19.7c.3 0 .5-.1.6-.3.1-.2.1-.8.1-1.7v-6.2c0-.8 0-1.3-.1-1.5-.1-.2-.3-.4-.6-.4s-.5.1-.5.3c-.1.2-.1.7-.1 1.5v6.4c0 .8 0 1.3.1 1.5 0 .3.2.4.5.4zM29.7 22h1.9l-1.9-7.7zM53.3 20.9L53 22h1.8c-.1 0-.1 0-.2-.1-.5-.2-1-.5-1.3-1z"
      />
      <path
        fill={textColor}
        d="M29.7 14.3l1.9 7.7h4.9l-3-9.9L36.2 4h-4.4l-2.1 7V4H25v18h4.7zM44.7 21.9c.6-.3 1.2-.7 1.6-1.3.4-.6.7-1.1.8-1.6.1-.5.2-1.2.2-2.1v-1.1H43v1.9c0 .7-.1 1.2-.2 1.5-.1.3-.3.4-.7.4-.3 0-.5-.1-.6-.3-.1-.2-.1-.6-.1-1.3v-3.2h5.8v-2c0-1.4-.2-2.5-.5-3.3-.3-.8-.9-1.4-1.7-1.9-.7-.4-1.8-.6-3-.6-1 0-1.9.2-2.7.6-.8.4-1.4 1-1.7 1.7-.4.7-.6 1.8-.6 3v4.3c0 1.1.1 1.9.2 2.5.2.6.4 1.1.8 1.6s1 .9 1.7 1.1c.2.1.4.1.5.1h4c.2.1.4 0 .5 0zm-3.2-10.5c0-.8 0-1.3.1-1.5.1-.2.3-.3.6-.3s.4.1.5.3c.1.2.1.7.1 1.5v1.1h-1.3v-1.1zM53.3 20.9c.4.5.8.8 1.3 1 .1 0 .1 0 .2.1h2.6l.6-.3c.5-.4.9-.8 1-1.4.1-.5.2-1.3.2-2.4v-6.7c0-1.1 0-1.8-.1-2.1 0-.3-.2-.7-.4-1-.2-.3-.6-.6-1-.8-.6-.2-1.1-.3-1.7-.3-.5 0-1 .1-1.5.3-.5.2-.9.5-1.2 1V4h-4.5v18H53l.3-1.1zm0-9.5c0-.8 0-1.3.1-1.5.1-.2.3-.3.5-.3.3 0 .5.1.6.4.1.2.1.7.1 1.5v6.2c0 .9 0 1.4-.1 1.7-.1.2-.3.3-.6.3s-.5-.1-.6-.3c-.1-.2-.1-.7-.1-1.5v-6.5zM65.1 21.9c.4-.3.8-.7 1.1-1.2V22h4.4v-7.4c0-2.4-.1-4.1-.2-4.8-.2-.8-.6-1.4-1.4-2-.9-.6-2-.8-3.5-.8-1.3 0-2.3.2-3.1.7-.8.5-1.3 1-1.6 1.6-.3.6-.4 1.5-.4 2.6v1h4.2v-1.5c0-.8 0-1.3.1-1.5.1-.2.3-.3.6-.3s.5.1.6.4c.1.2.2.7.2 1.5 0 .6-.1 1-.2 1.2-.1.2-.9.6-2.4 1.2-1.4.5-2.2 1-2.6 1.4-.3.4-.5 1.2-.5 2.3v1.2c0 1.5.3 2.5 1 2.9.2.2.5.3.8.4h2.6c.1-.1.2-.2.3-.2zm-.5-4.1c0-.7.1-1.2.2-1.5.1-.4.5-.8 1.3-1.3v3c0 .7 0 1.2-.1 1.4-.1.2-.3.3-.6.3s-.5-.1-.6-.3c-.1-.3-.2-.8-.2-1.6zM76.6 20.9c.4.5.8.8 1.3 1 .1 0 .1 0 .2.1h2.6l.6-.3c.5-.4.9-.8 1-1.4.1-.5.2-1.3.2-2.4v-6.7c0-1.1 0-1.8-.1-2.1 0-.3-.2-.7-.4-1-.2-.3-.6-.6-1-.8-.5-.2-1-.3-1.6-.3-.5 0-1 .1-1.5.3-.5.2-.9.5-1.2 1V4h-4.5v18h4.2l.2-1.1zm0-9.5c0-.8 0-1.3.1-1.5.1-.2.3-.3.5-.3.3 0 .5.1.6.4.1.2.1.7.1 1.5v6.2c0 .9 0 1.4-.1 1.7-.1.2-.3.3-.6.3s-.5-.1-.6-.3c-.1-.2-.1-.7-.1-1.5v-6.5zM92.8 14.4h2.8V11h-2.8V7.6H96V4h-7.9v18h4.7zM97 7.2h4.6V22H97zM97 4h4.6v2.3H97zM107.7 12c0-1.1 0-1.8.1-2.1.1-.3.3-.4.6-.4s.5.1.6.3c.1.2.1.8.1 1.9V22h4.5V11.7c0-1.3-.1-2.2-.2-2.8-.1-.6-.5-1-.9-1.4-.5-.3-1.2-.5-1.9-.5-.6 0-1.2.1-1.6.4-.5.3-.9.7-1.2 1.2l.1-1.4h-4.6V22h4.5V12zM119.7 21.9c.4-.3.8-.7 1.1-1.2V22h4.4v-7.4c0-2.4-.1-4.1-.2-4.8-.2-.8-.6-1.4-1.4-2-.9-.6-2-.8-3.6-.8-1.3 0-2.3.2-3.1.7-.8.5-1.3 1-1.6 1.6-.3.6-.4 1.5-.4 2.6v1h4.2v-1.5c0-.8 0-1.3.1-1.5.1-.2.3-.3.6-.3s.5.1.6.4c.1.2.2.7.2 1.5 0 .6-.1 1-.2 1.2-.1.2-.9.6-2.4 1.2-1.4.5-2.2 1-2.6 1.4-.3.4-.5 1.2-.5 2.3v1.2c0 1.5.3 2.5 1 2.9.2.2.5.3.8.4h2.6c.2-.1.3-.2.4-.2zm-.5-4.1c0-.7.1-1.2.2-1.5.1-.4.5-.8 1.3-1.3v3c0 .7 0 1.2-.1 1.4-.1.2-.3.3-.6.3s-.5-.1-.6-.3c-.2-.3-.2-.8-.2-1.6zM131.1 12c0-1.1 0-1.8.1-2.1.1-.3.3-.4.6-.4s.5.1.6.3c.1.2.1.8.1 1.9V22h4.5V11.7c0-1.3-.1-2.2-.2-2.8-.1-.6-.5-1-.9-1.4-.5-.3-1.2-.5-1.9-.5-.6 0-1.2.1-1.6.4-.5.3-.9.7-1.2 1.2l.1-1.4h-4.6V22h4.5V12zM146 21.8c.7-.3 1.2-.8 1.6-1.4.4-.6.7-1.2.7-1.8.1-.6.1-1.5.1-2.7h-4v1.8c0 .8-.1 1.3-.2 1.6-.1.3-.3.4-.6.4s-.5-.1-.6-.4c-.1-.3-.2-.7-.2-1.2v-7c0-.6 0-1.1.1-1.2.1-.2.3-.3.5-.3.3 0 .4.1.5.3.1.2.1.6.1 1.2v1.7h4.2c0-1.4-.1-2.5-.4-3.2-.3-.8-.8-1.4-1.7-1.9-.8-.5-1.8-.7-3-.7s-2.2.3-3 .8c-.8.5-1.4 1.1-1.6 1.7-.3.6-.4 1.6-.4 2.8v4.2c0 1.4.2 2.5.5 3.3.3.8.8 1.4 1.6 1.8.3.2.6.3.9.4h4c.5 0 .7-.1.9-.2zM157.4 21.9c.6-.3 1.2-.7 1.6-1.3.4-.6.7-1.1.8-1.6.1-.5.2-1.2.2-2.1v-1.1h-4.3v1.9c0 .7-.1 1.2-.2 1.5-.1.3-.3.4-.7.4-.3 0-.5-.1-.6-.3-.1-.2-.1-.6-.1-1.3v-3.2h5.8v-2c0-1.4-.2-2.5-.5-3.3-.3-.8-.9-1.4-1.7-1.9-.7-.4-1.8-.6-3-.6-1 0-1.9.2-2.7.6-.8.4-1.4 1-1.7 1.7-.3.7-.5 1.8-.5 3.1v4.3c0 1.1.1 1.9.2 2.5.2.6.4 1.1.8 1.6s1 .9 1.7 1.1c.2.1.4.1.5.1h4c.1 0 .3-.1.4-.1zm-3.2-10.5c0-.8 0-1.3.1-1.5.1-.2.3-.3.6-.3s.4.1.5.3c.1.2.1.7.1 1.5v1.1h-1.3v-1.1z"
      />
    </Svg>
  );
};

export default Logo;
