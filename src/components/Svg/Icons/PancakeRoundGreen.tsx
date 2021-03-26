import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 90 90" {...props}>
      <circle fill="#614322" cx="45" cy="45" r="45" />
      <circle fill="#ACE7A7" cx="45" cy="45" r="43" />
      <path
        fill="#604222"
        d="M28.4 73c-.3-1.2-.3-2.4-.4-3.6-.2-1.6-.3-3.2-.4-4.7-.1-1.3-.2-2.5-.3-3.8-.1-1.6-.3-3.2-.4-4.8-.1-1.3-.2-2.5-.3-3.8-.1-1.6-.3-3.2-.4-4.8-.1-1.3-.2-2.5-.3-3.8-.1-1.6-.3-3.2-.4-4.8-.1-1.3-.2-2.6-.3-3.8-.1-1.6-.3-3.2-.4-4.8-.1-.7 0-1.5.3-2.2.1-.3.2-.5.1-.8 0-1.5.2-2.9.6-4.4 1.4-4.9 4.4-8.4 8.7-11 2.7-1.6 5.6-2.5 8.6-2.9 4.6-.6 9.1.2 13.2 2.3 3.9 2 6.9 4.9 8.8 8.8.9 2 1.5 4.1 1.5 6.3 0 1 .1 2.1.2 3.1.1.7-.1 1.4-.1 2-.1 1-.2 2-.3 2.9-.2 1.7-.3 3.3-.4 5-.1 1.3-.2 2.6-.3 3.8-.1 1.6-.3 3.2-.4 4.8-.1 1.2-.2 2.5-.3 3.7-.1 1.7-.3 3.3-.4 5-.1 1.3-.2 2.5-.3 3.8-.1 1.6-.3 3.2-.4 4.8-.1 1.3-.2 2.5-.3 3.8-.1 1.4-.1 2.7-.5 4-.1.1-.1.2-.2.3-1.1 2.8-3.9 4.7-6.8 4.6H35.7c-2 0-3.6-.7-5-2.1-1.3-.7-1.9-1.8-2.3-2.9zm22.3-51.3c-.1.3-.2.5-.2.7-.1 0-.1 0-.1.1-.1.4-.3.9-.4 1.3 0 .1 0 .2.1.3.4.4.7.9 1.1 1.5 0 .1.1.2.1.2.1 0 .1-.1.2-.2l.9-1.8c.4-.8.9-1.5 1.3-2.3.1-.2.2-.4 0-.5-.3-.2-.7-.4-1.1-.4-.2-.1-.5-.3-.8-.2-.1-.1-.2-.1-.3-.1-.4-.2-.5-.1-.7.3.1.4-.1.7-.1 1.1zm1.8 4.8c-.3.3-.5.6-.7 1-.1.2-.1.5-.1.7 0 .1.1.2.2.1.5-.2 1-.4 1.5-.7.1 0 .3-.1.4-.1.1 0 .2-.1.1-.3-.2-.4-.4-.8-.8-1-.5-.3-.6-.2-.6.3zm-4-3.1c.4.2.6.2.6-.2.2-.8.3-1.6.5-2.4.1-.3.2-.6.2-.9-.4.2-.7.3-1.1.4-.3.1-.4.4-.4.7.1.7 0 1.4 0 2.1 0 .1 0 .3.2.3zM37.8 25c.1-.2.4-.3 0-.6-.6-.4-1.3-.3-1.8.2-.4.3-.6.8-.8 1.2-.2.5-.1.7.4.8h.3c.3.2.7.4 1.1.5.4.1.5 0 .5-.4.1-.5.2-1.1.3-1.7zm2.8 3.1c-.3.4-.3.5.2.8 1.3.8 2.7 1.5 3.8 2.5.3.2.5.2.8 0 1.3-.7 2.7-1.3 4-1.9.2-.1.5-.2.7-.4.1-.1.2-.1.2-.3 0-1.1-.1-2.2-.7-3.2-.5-.8-1.2-1.3-2.1-1.2-.4 0-.7.1-1.1.2-.8.2-1.4-.1-1.8-.7l-.5-.8c0-.2-.1-.3-.2-.4-.4-.3-.8-.4-1.3-.5-1.1 0-1.9.5-2.6 1.2-1 .9-1.5 2.1-1.6 3.4-.1.6 0 .8.6.9.2.1.4.1.5-.1.4-1.1 1.3-1.7 2.4-2.1.4 0 .8 0 1.2.2 1 .4 1.7 1.1 2.4 1.7.2.2.2.4.1.6-.8-.3-1.5-.6-2.2-1-.1.1-.3 0-.4 0-.4-.3-.8-.3-1.2-.1-.5.3-1 .6-1.2 1.2zm5.6-8.4c-.8.4-1.5.4-2.3.1-.3-.1-.5-.2-.8-.2-.5-.1-.7.1-.8.6-.2 0-.4.1-.5.2-.3.4-.6.8-.9 1.3.3-.1.4-.1.6-.1 1.6-.4 3.2.1 4 1.7.4.7.8.6 1.4.2.2-.1.3-.3.3-.5 0-.5-.1-.9-.1-1.3v-.5c0-.9.4-1.4 1.2-1.6.2-.1.3 0 .5-.2.3-.1.7-.2 1-.3.1 0 .3 0 .4-.2 0-.2-.1-.3-.2-.4-.8-.7-2-.6-2.7.2-.4.2-.8.6-1.1 1zm5.4-1.3c.3-.3.6-.6.8-.9.3-.5-.1-1.2-.8-1.3h-.7c-.9.1-1.6 0-2.2-.7-.2-.2-.4-.5-.6-.7-.4-.4-.9-.4-1.4-.1-.2.1-.3.3-.5.4 0 0-.1 0-.1.1-.7.9-1.1 1.9-1.6 3-.2.4.1.7.5.6.2 0 .4-.1.5-.3.3-.4.6-.7 1-1 .7-.7 1.9-.9 2.8-.4.6.3 1 .8 1.3 1.5.1.2.2.4.5.4.5-.1.5-.4.5-.6zm3.2.9c-.2-.2-.3-.5-.5-.7-.5-.5-.9-.5-1.4 0-.2.2-.4.4-.3.7.1.3.4.3.7.3.5.2 1 .5 1.5.7.6.3.6.5.3 1-.2.4-.4.8-.5 1.2-.5.6-.8 1.2-1.2 1.8-.3.4-.2.6.2.9.5.4 1 .8 1.2 1.4.1.2.2.2.3.2.9-.4 1.8-.7 2.7-1 .2-.1.2-.1.1-.3-.4-.5-.5-1-.3-1.6.1-.3.3-.6.5-.8l1.2-1.5c.2-.3.2-.6 0-.9-.3-.4-.7-.4-1.2-.3-1.2.2-2.4 0-3.3-1.1zm-13-1.7c.1-.1.1-.1.1-.2.4-.9.8-1.9 1.2-2.8.1-.1.3-.3.2-.5-.1-.2-.3-.2-.5-.2l-2.4-.3c-.3 0-.5.1-.6.4-.2.6-.4 1.3-.6 1.9-.2.6-.3 1.2-.3 1.9-.1.3-.2.6-.1.9-.1.3-.1.7-.1 1 0 .6.5 1.1 1.1 1 .3 0 .5-.3.7-.5.6-.8 1-1.7 1.3-2.6zm-5 .5c-.4-.7-.9-.9-1.7-.6-.5.1-.9.4-1.2.8-1.6 1.8-2.4 4-2.4 6.4 0 .8-.1.7.7.9.3.1.6.2.9.2.8.4.9.2 1.2-.5s.7-1.2 1.3-1.5c.9-.5 1.8-.4 2.8-.3.3.1.5 0 .6-.2.2-.3.4-.5.7-.8.2-.2.4-.3.5-.6-.1-.1-.2 0-.3 0-1.1-.1-1.9-.7-2.3-1.7-.5-.7-.6-1.4-.8-2.1zm13.6 13.3c-1 .5-1.9 1.1-2.8 1.6-.2.2-.3.2 0 .4 1.7 1.3 3.2 2.6 4.7 4.1 4.3 4.3 7.8 9.5 10.2 15.1 0 .1 0 .2.2.2v-.1c.1-1.4.3-2.9.4-4.3.1-1 .2-1.9.2-2.9.1-.9.2-1.7.2-2.6.2-2.2.4-4.4.6-6.5.2-2.2.4-4.3.5-6.5.1-2-1.6-3.4-3.5-2.9-1.4.4-2.8.8-4.2 1.3-2.3.9-4.4 1.9-6.5 3.1zM35 28.7v11.1s0 .5-.1.7c-.3 1.3-1.5 2-2.8 1.9-1.2-.2-2.1-1.2-2.1-2.5V27.4c0-.3-.1-.4-.4-.4-1.4-.2-2.8.9-3 2.3-.1.7 0 1.3.1 1.9.2 2.2.4 4.3.6 6.5.2 2.5.4 4.9.6 7.4.2 2.1.4 4.3.6 6.4.2 2.5.4 4.9.6 7.4.2 2.2.4 4.4.6 6.5.2 1.9.3 3.8.5 5.6.1 1.1.4 2.1 1 2.9 1.1 1.5 2.6 2.2 4.5 2.2h19.8c2.3-.2 4.4-2 4.8-4.3l.6-4.8c.3-2.5.7-5.1 1-7.6.1-.8.3-1.6 0-2.4-3.7-10.8-10.4-19.1-20.2-25-.1-.1-.5-.2-.5-.2v4.4c0 1.4-1.2 2.5-2.6 2.5-1.4 0-2.4-1.1-2.4-2.5v-1.3-5.3c0-.2 0-.3-.2-.4-.3-.2-.6-.3-1-.5zm2.6-12c.1-.2.1-.3.1-.4.2-1.1.5-2.2.9-3.3.2-.7.7-.9 1.5-.9 1.2.1 2.4.3 3.6.5.9.1 1.7.5 1.9 1.5h.1c.1 0 .1-.1.2-.1 1.3-1 2.6-1 3.7.3.4.5.8.6 1.4.5 1.6-.2 2.4.3 3 1.8.1.2.2.3.3.3.6.2 1.1.5 1.5 1.1.3.4.7.6 1.1.7.5.1 1.1.2 1.6.2s1 .2 1.3.5c.7.7 1 1.5 1.1 2.5 0 .2-.1.4-.2.5-.4.6-.9 1.1-1.3 1.7-.1.2-.2.4 0 .6.3.3.6.5 1.2.3 1.2-.4 2.3-.3 3.5.3.1 0 .2.2.3.1.1-.1 0-.2 0-.4-.1-.8-.3-1.6-.6-2.4-1.2-3.6-3.4-6.4-6.6-8.5-4.3-2.8-9-3.8-14.1-3.2-3.7.4-7 1.8-10 4.1-3 2.4-5 5.3-5.8 9.1-.1.4-.2.8-.2 1.2.2 0 .2 0 .3-.1.7-.3 1.6-.4 2.3-.3.2 0 .3 0 .3-.3.3-1.8.7-3.6 1.4-5.2.4-1 .9-1.9 1.7-2.6.8-.7 1.6-1.1 2.7-.9.8.1 1.3.4 1.8.8zm-5.9 17.1v6.1c0 .5.3.9.8.9s.8-.3.8-.9V28.2c0-.2-.1-.3-.3-.4-.3-.1-.7-.2-1-.3-.3-.1-.4 0-.4.3.1 2 .1 4 .1 6zM38 30v6.2c0 .5.4.9.9.9.4 0 .8-.4.8-.8v-4.9c0-.1 0-.2-.1-.3-.6-.5-1.1-.8-1.6-1.1zm6.6-14.5c0-.1 0-.2-.1-.3-.1-.1-.1-.3-.2-.3-.2 0-.2.2-.2.3-.4.8-.9 1.7-1.3 2.5-.1.2-.3.4-.1.5s.5.1.8 0c.2-.1.3-.3.3-.5.1-.6.3-1.2.6-1.7.1-.1.3-.3.2-.5z"
      />
      <path
        fill="#9ED499"
        d="M28.4 73c.4 1.2 1 2.2 1.9 3.1 1.4 1.3 3.1 2.1 5 2.1h20.4c2.9 0 5.7-1.9 6.8-4.6 0-.1.1-.2.2-.3 1.3.4 2.6.8 3.7 1.7.5.4.9.8 1 1.5 0 .7-.3 1.1-.8 1.5-1.1.9-2.4 1.3-3.7 1.7-1.6.5-3.2.8-4.8 1.1-1 .2-2 .3-3 .4-1.2.2-2.5.2-3.7.4-.4.1-.9 0-1.3.1-2.7.1-5.4.1-8.1.1-1.4 0-2.8-.1-4.2-.3-1.6-.1-3.2-.3-4.8-.6-1.7-.2-3.4-.6-5-1.1-1.3-.4-2.5-.8-3.6-1.5-.4-.2-.8-.6-1-1-.4-.6-.3-1.3.2-1.8.7-.8 1.7-1.2 2.7-1.7.6-.4 1.3-.7 2.1-.8z"
      />
      <path
        fill="#F6E6CD"
        d="M35.1 28.7c.4.2.7.3 1 .4.2.1.2.2.2.4V36.1c0 1.4 1.1 2.5 2.4 2.6 1.4 0 2.6-1 2.6-2.5v-4.4c.2 0 .3.1.4.2 9.7 5.9 16.4 14.2 20.1 25 .3.8.1 1.6 0 2.4-.3 2.5-.7 5.1-1 7.6l-.6 4.8c-.3 2.3-2.5 4.2-4.8 4.3H35.6c-1.8 0-3.3-.7-4.4-2.2-.6-.9-1-1.8-1-2.9-.1-1.9-.3-3.8-.5-5.6-.2-2.2-.4-4.4-.6-6.5-.2-2.5-.4-4.9-.6-7.4-.2-2.1-.4-4.3-.6-6.4-.2-2.5-.4-4.9-.6-7.4-.2-2.2-.4-4.3-.6-6.5-.1-.6-.2-1.3-.1-1.9.2-1.4 1.6-2.4 3-2.3.3 0 .4.1.4.4v12.5c0 1.3.9 2.3 2.1 2.5 1.3.2 2.5-.6 2.8-1.9.1-.2.1-.5.1-.7l.1-11.1zm10.6 37H42.3c-1 0-1.6.7-1.4 1.7.1.9.6 1.7 1.3 2.3 1.5 1.3 3.2 1.6 5 1.1 1.7-.5 3-1.5 3.3-3.4.2-1-.4-1.7-1.4-1.7h-3.4zm-6-4c0-1.7-1.3-3-3-3-1.6 0-3 1.3-3 3 0 1.6 1.3 3 3 3 1.6 0 2.9-1.3 3-3zm14.8 3c1.7 0 3-1.3 3-3 0-1.6-1.3-3-2.9-3-1.7 0-3 1.3-3 3-.1 1.6 1.2 2.9 2.9 3zM50.4 31.4c2.1-1.2 4.2-2.2 6.5-3 1.4-.5 2.8-1 4.2-1.3 1.9-.5 3.6.9 3.5 2.9-.2 2.2-.4 4.3-.5 6.5-.2 2.2-.4 4.4-.6 6.5-.1.9-.2 1.7-.2 2.6-.5-.9-1-1.8-1.5-2.6-1.8-2.9-4-5.5-6.5-7.8-.9-.9-1.9-1.7-3-2.4-.7-.5-1.3-1-1.9-1.4z"
      />
      <path
        fill="#E3BC95"
        d="M37.6 16.7c-.5-.4-1-.7-1.6-.8-1.1-.1-1.9.2-2.7.9-.8.7-1.3 1.7-1.7 2.6-.7 1.7-1.1 3.4-1.4 5.2 0 .2-.1.3-.3.3-.8-.1-1.6 0-2.4.3-.1 0-.2.1-.3.1 0-.4.1-.8.2-1.2.8-3.8 2.8-6.7 5.8-9.1 2.9-2.3 6.3-3.6 10-4.1 5.1-.6 9.8.4 14.1 3.2 3.1 2.1 5.4 4.9 6.6 8.5.3.8.4 1.6.6 2.4 0 .1.1.3 0 .4-.1.1-.2 0-.3-.1-1.1-.5-2.3-.6-3.5-.3-.5.2-.8-.1-1.2-.3-.2-.2-.1-.4 0-.6.4-.6.9-1.1 1.3-1.7.1-.2.2-.3.2-.5-.1-.9-.4-1.8-1.1-2.5-.3-.3-.8-.5-1.3-.5s-1.1-.1-1.6-.2c-.4-.1-.8-.4-1.1-.7-.4-.5-.9-.9-1.5-1.1-.2 0-.3-.1-.3-.3-.6-1.5-1.4-2-3-1.8-.6.1-1 0-1.4-.5-1.1-1.2-2.4-1.3-3.7-.3-.1 0-.1.1-.2.1h-.1c-.2-1-1-1.4-1.9-1.5-1.2-.2-2.4-.4-3.6-.5-.7-.1-1.2.2-1.5.9-.4 1.1-.7 2.1-.9 3.3-.1.1-.1.2-.2.4z"
      />
      <path
        fill="#E4BD96"
        d="M50.4 31.4c.6.4 1.2.9 1.8 1.3l3 2.4c2.5 2.3 4.7 4.9 6.5 7.8.5.8 1 1.7 1.5 2.6-.1 1-.1 1.9-.2 2.9-.1 1.4-.3 2.9-.4 4.3v.1c-.2 0-.1-.1-.2-.2C60 47 56.6 41.8 52.2 37.5c-1.5-1.5-3-2.8-4.7-4.1-.3-.2-.2-.3 0-.4 1-.5 2-1.1 2.9-1.6z"
      />
      <path
        fill="#7E3629"
        d="M45.6 28.2c.2-.2.2-.4-.1-.6-.7-.7-1.5-1.4-2.4-1.7-.4-.1-.8-.2-1.2-.2.1-.2.2-.3.4-.5.7-.5 1.3-.3 1.9 0 .4.2.7.4 1.1.6.4.2.9.3 1.3.2.6 0 1-.4 1.4-.7.4-.3.6-.3.9.1.5.6.7 1.3.8 2 0 .7-.2 1.4-.2 2-1.4.6-2.7 1.2-4 1.9-.3.2-.5.2-.8 0-1.2-1-2.5-1.7-3.8-2.5-.5-.3-.6-.4-.3-.8 0 0 .1.1.1 0 .1 0 .2 0 .3-.1.9-.3 1.8-.3 2.5.4.4.3.7.6 1.2.7.6.2 1-.1 1-.8-.1.1-.1 0-.1 0z"
      />
      <path
        fill="#F47645"
        d="M31.7 33.8v-6c0-.3.1-.4.4-.3.3.1.7.2 1 .3.2.1.3.2.3.4v11.7c0 .5-.3.9-.8.9s-.8-.3-.8-.9c-.1-2.1-.1-4.1-.1-6.1z"
      />
      <path
        fill="#B66F3D"
        d="M49.5 29.5c.1-.7.3-1.3.2-2-.1-.7-.3-1.4-.8-2-.3-.4-.5-.4-.9-.1-.4.3-.8.7-1.4.7-.4 0-.9 0-1.3-.2s-.7-.4-1.1-.6c-.6-.3-1.3-.5-1.9 0-.2.1-.3.3-.4.5-1.1.4-1.9 1-2.4 2.1-.1.2-.3.2-.5.1.2-1.2.7-2.4 1.5-3.4.2-.3.4-.3.7-.3.2.1.4.1.7.1.4 0 .7-.3.8-.8.1-.4.2-.5.6-.5.3 0 .6.1.9.2l.5.8c.4.6 1 .9 1.8.7.4-.1.7-.2 1.1-.2 1-.1 1.6.4 2.1 1.2.6 1 .7 2.1.7 3.2 0 .2-.1.2-.2.3-.2 0-.5.1-.7.2z"
      />
      <path
        fill="#3F7C3A"
        d="M59.4 20.7c.3.3.2.6 0 .9l-1.2 1.5c-.2.3-.4.5-.5.8-.3.6-.1 1.1.3 1.6.1.2.1.2-.1.3-.9.3-1.8.6-2.7 1-.2.1-.3 0-.3-.2-.2-.6-.7-1.1-1.2-1.4-.4-.3-.4-.5-.2-.9.4-.6.7-1.3 1.2-1.8.4.4.9.5 1.4.3.3-.1.6-.2.9-.4.9-.4 1.6-1 2.4-1.7zm-3.8 2.5c-.5 0-1 .3-1.3.7-.3.1-.4.4-.3.6.1.2.3.4.6.3.4 0 .8-.2 1.2-.4.3-.1.6-.3.5-.7s-.3-.5-.7-.5zm.2 3c.4 0 .7-.2.7-.6 0-.3-.3-.5-.7-.5-.4 0-.7.2-.7.6s.3.5.7.5zM39.7 21.9h.3c-.1.3-.3.4-.5.6-.3.2-.5.4-.7.8-.2.3-.3.3-.6.2-.9-.2-1.9-.3-2.8.3-.6.3-1.1.8-1.3 1.5s-.3.9-1.2.5c-.1-.4-.1-.9 0-1.3.1-.3.1-.7.2-1 .3.1.6.1.9-.2.2-.2.2-.5.1-.8-.1-.2-.1-.4-.1-.6 0-.1.1-.1.2-.2.1.3.1.6.2.8.1.3.3.5.6.5s.4-.3.5-.6c.2-.5.1-1.1.2-1.7.9.1 1.7.4 2.3 1.1.7.7 1 .6 1.7.1zm-2.1.3c0-.4-.3-.7-.7-.7-.3 0-.6.4-.6.8s.2.7.6.7c.4-.1.7-.4.7-.8z"
      />
      <path
        fill="#ABE5A5"
        d="M32.2 25.5c-.7-.2-.7-.1-.7-.9 0-2.4.8-4.6 2.4-6.4.3-.4.7-.6 1.2-.8.8-.2 1.3 0 1.7.6-.1.1-.1.1-.2.1-1.7.5-2.6 1.8-3.2 3.4-.5.2-.6.4-.5 1-.1.3-.3.6-.4 1-.2.7-.2 1.4-.3 2zM38.7 18.6c0-.3.1-.6.1-.9 0 0 .1-.1.1-.2.3-.9.8-1.8 1.2-2.6.2-.3.4-.5.8-.5.7 0 1.4.1 2.1.1-.4.9-.8 1.9-1.2 2.8 0 .1-.1.1-.1.2-.2 0-.3.1-.4.2-.4.3-.8.5-1.2.7-.4.3-.9.4-1.4.2z"
      />
      <path fill="#F47645" d="M38 30c.6.3 1 .6 1.5.9.1.1.1.2.1.3v4.9c0 .5-.3.8-.8.8s-.9-.3-.9-.9v-2.6L38 30z" />
      <path
        fill="#6BB066"
        d="M52.6 20.6c.4 0 .7.2 1.1.4.2.1.1.3 0 .5-.4.8-.9 1.6-1.3 2.4-.3.6-.6 1.2-1 1.8 0 .1-.1.2-.2.2s-.1-.1-.2-.2c-.3-.5-.6-1.1-1.1-1.5-.1-.1-.1-.3-.1-.4.2-.4.3-.9.4-1.3l.1-.1c.1 0 .1 0 .2-.1.6-.5 1.1-1 1.8-1.4.3-.1.4-.2.3-.3zM59.4 20.7c-.8.6-1.5 1.3-2.4 1.7-.3.1-.6.3-.9.4-.5.2-1 .1-1.4-.3.1-.4.3-.8.5-1.2.3-.6.2-.7-.3-1-.5-.3-1-.5-1.5-.7.2-.4.7-.4 1.1-.3.1 0 .3.2.4 0 .9 1.1 2.1 1.3 3.4 1.1.4-.1.8-.1 1.1.3z"
      />
      <path
        fill="#3F7C3A"
        d="M51.5 18.4c0 .2 0 .4-.3.5-.3.1-.4-.1-.5-.4-.3-.6-.7-1.2-1.3-1.5-.9-.5-2.1-.3-2.8.4-.3.3-.7.6-1 1-.1.2-.3.3-.5.3-.4 0-.7-.3-.5-.6.5-1 .9-2.1 1.6-3 0 0 .1 0 .1-.1.2 0 .3 0 .5.1.4.1.9.1 1.1.6.3.6.9.9 1.5 1 1 .2 1.8.7 2.1 1.7zM47.2 21.5c0 .5.1.9.1 1.3 0 .2-.1.4-.3.5-.6.4-1 .5-1.4-.2-.8-1.5-2.4-2-4-1.7-.2 0-.4.1-.6.1.3-.5.6-.9.9-1.3.1-.2.3-.3.5-.2.3.1.6.1 1 .2.6.1 1.2.3 1.6.8.4.5 1 .7 1.7.6.1 0 .3-.1.5-.1z"
      />
      <path
        fill="#C3785A"
        d="M44.2 23.3c-.3 0-.6-.2-.9-.2-.4 0-.6.2-.6.5-.1.5-.3.7-.8.8-.2 0-.4-.1-.7-.1-.3-.1-.5 0-.7.3-.8 1-1.3 2.2-1.5 3.4-.6-.1-.7-.3-.6-.9.2-1.3.7-2.5 1.6-3.4.7-.7 1.5-1.2 2.6-1.2.5 0 .9.2 1.3.5.2 0 .3.1.3.3z"
      />
      <path
        fill="#6BB066"
        d="M33.4 21.6c.6-1.6 1.5-2.9 3.2-3.4.1 0 .2-.1.2-.1.3.7.4 1.4.7 2.1.4 1 1.2 1.7 2.3 1.7-.7.5-1.1.5-1.6 0-.7-.7-1.4-1-2.3-1.1v-.3c0-.5-.4-.8-.9-.5-.4.2-.6.5-.6 1v.7c-.1.1-.2.1-.2.2-.3-.1-.5-.3-.8-.3zM47.2 21.5c-.2.1-.4.1-.6.2-.7.1-1.3-.1-1.7-.6s-1-.7-1.6-.8c-.3 0-.6-.1-1-.2.1-.5.4-.7.8-.6.3.1.5.1.8.2.8.3 1.5.4 2.3-.1.3 0 .6-.1.8-.3.2-.2.4-.3.7-.4.4-.2.8-.2 1.1.1-.1.1-.3.1-.5.2-.8.3-1.2.8-1.2 1.6.1.3.1.5.1.7zM51.5 18.4c-.3-1-1.1-1.5-2.1-1.7-.6-.1-1.2-.4-1.5-1-.2-.4-.7-.5-1.1-.6-.2 0-.3-.1-.5-.1.2-.1.3-.3.5-.4.5-.3 1-.3 1.4.1.2.2.4.4.6.7.6.7 1.3.9 2.2.7.2 0 .4-.1.7 0 .6 0 1.1.7.8 1.3-.4.4-.6.8-1 1zM38.7 18.6c.5.2 1 .1 1.4-.1.4-.2.8-.4 1.2-.7.1-.1.3-.2.4-.2-.2 1-.6 1.8-1.3 2.6-.2.2-.4.5-.7.5-.6.1-1.1-.4-1.1-1 0-.4 0-.7.1-1.1z"
      />
      <path
        fill="#B66F3D"
        d="M45.6 28.2v.2c.1.6-.3 1-1 .8-.5-.1-.8-.4-1.2-.7-.8-.6-1.6-.7-2.5-.4-.1 0-.2 0-.2.1.2-.6.6-.9 1.1-1.1.3.6.7.7 1.1.1l.1-.1c.2 0 .3.1.4.2.7.2 1.5.6 2.2.9z"
      />
      <path
        fill="#EED1AF"
        d="M43.1 14.6c-.7 0-1.4-.1-2.1-.1-.4 0-.6.1-.8.5-.5.9-.9 1.7-1.2 2.6 0 .1-.1.1-.1.2 0-.6.2-1.3.3-1.9.2-.6.4-1.3.6-1.9.1-.3.3-.5.6-.4l2.4.3c.2 0 .4 0 .5.2s-.1.3-.2.5z"
      />
      <path
        fill="#C3785A"
        d="M36 26.6h-.3c-.6-.1-.7-.3-.4-.8.2-.4.5-.9.8-1.2.5-.5 1.2-.5 1.8-.2.4.2 0 .4 0 .6-1.1.1-1.6.7-1.9 1.6z"
      />
      <path
        fill="#ABE5A5"
        d="M48.8 19.1c-.3-.3-.7-.3-1.1-.1-.2.1-.5.2-.7.4-.2.2-.5.3-.8.3.3-.4.7-.8 1-1.2.7-.8 1.9-.9 2.7-.2.1.1.3.2.2.4 0 .2-.2.2-.4.2-.2.1-.5.2-.9.2z"
      />
      <path
        fill="#6BB066"
        d="M44.6 15.5c0 .2-.1.4-.2.6-.3.5-.6 1.1-.7 1.7 0 .2-.1.4-.3.5-.2.1-.5.2-.8 0s0-.4.1-.5c.4-.9.9-1.7 1.3-2.5.1-.1.1-.3.2-.3s.2.2.2.3c.2 0 .2.1.2.2z"
      />
      <path fill="#7E3629" d="M36 26.6c.3-.9.8-1.5 1.8-1.6-.1.6-.1 1.2-.2 1.8 0 .4-.2.5-.5.4-.4-.2-.8-.4-1.1-.6z" />
      <path
        fill="#EED1AF"
        d="M48.5 23.4c-.2 0-.2-.1-.2-.3 0-.7.1-1.4 0-2.1 0-.3.1-.6.4-.7.4-.1.7-.3 1.1-.4.1.3 0 .6-.2.9-.3 0-.5.1-.6.3-.2.2-.2.6-.3.9 0 .4 0 .9-.2 1.4z"
      />
      <path
        fill="#6BB066"
        d="M32.2 25.5c.1-.6.2-1.3.4-2 .1-.3.2-.7.4-1 .1.3.2.6.3.8-.1.3-.2.7-.2 1-.1.4 0 .9 0 1.3-.4.2-.6 0-.9-.1z"
      />
      <path
        fill="#ABE5A5"
        d="M54.8 19.3c-.2.2-.3 0-.4 0-.4-.1-.9-.1-1.1.3-.3 0-.6 0-.7-.3-.1-.3.1-.5.3-.7.5-.5.9-.5 1.4 0 .2.2.4.5.5.7z"
      />
      <path
        fill="#7E3629"
        d="M53.3 27.6c-.5.3-1 .5-1.5.7-.1.1-.2 0-.2-.1 0-.3 0-.5.1-.7.2-.3.5-.7.7-1 .5.2.8.6.9 1.1z"
      />
      <path
        fill="#ABE5A5"
        d="M48.5 23.4c.1-.5.2-1 .2-1.4.1-.3.1-.6.3-.9.2-.2.4-.3.6-.3-.2.8-.3 1.6-.5 2.4 0 .3-.2.4-.6.2zM52.6 20.6c0 .1 0 .2-.1.2-.7.4-1.2.9-1.8 1.4-.1.1-.1.1-.2.1 0-.2.1-.4.2-.6v-.1c.2-.1.3-.4.4-.6.2-.3.4-.6.8-.7.3 0 .5.2.7.3z"
      />
      <path
        fill="#B66F3D"
        d="M53.3 27.6c-.1-.5-.3-.9-.8-1.1.1-.5.2-.5.6-.3.4.2.6.6.8 1 .1.1 0 .2-.1.3-.3 0-.4.1-.5.1z"
      />
      <path fill="#EED1AF" d="M51.9 20.4c-.4.1-.6.4-.8.7-.1.2-.2.4-.4.6 0-.4.2-.7.2-1.1.1-.4.2-.5.7-.3.1 0 .2.1.3.1z" />
      <path fill="#C3785A" d="M43 27s-.1 0-.1.1c-.4.5-.8.5-1.1-.1.4-.2.8-.3 1.2 0z" />
      <path fill="#ABE5A5" d="M50.5 22.4c-.1 0-.1 0 0 0z" />
      <path fill="#EED1AF" d="M50.7 21.7z" />
      <path fill="#B66F3D" d="M40.6 28.1z" />
      <path
        fill="#EED1AF"
        d="M45.6 54.9h6.8c.4 0 .6.2.7.6.2.4.1.9-.1 1.4-.1.3-.3.4-.7.4H38.9c-.5 0-.7-.1-.9-.6-.1-.4-.1-.8 0-1.2.1-.3.4-.5.8-.5 2.3-.1 4.6-.1 6.8-.1zM45.6 46.5h6.8c.4 0 .6.2.7.5.2.4.2.9 0 1.4-.1.3-.4.5-.7.5H38.8c-.5 0-.8-.3-.9-.9-.1-.3 0-.7.1-1 .1-.3.3-.5.7-.5h6.9zM45.6 50.5h6.7c.8 0 .9.3 1 .9.1.4 0 .7-.2 1.1-.1.2-.3.4-.6.4H38.7c-.5 0-.7-.2-.8-.8v-.7c.1-.6.3-.8.9-.8l6.8-.1z"
      />
      <path
        fill="#604222"
        d="M45.6 65.8l3.4-.1c1.1 0 1.6.7 1.4 1.7-.4 1.9-1.6 2.9-3.3 3.4-1.8.5-3.5.2-5-1.1-.7-.6-1.2-1.4-1.3-2.3-.2-1 .4-1.7 1.4-1.7.7 0 1.5 0 2.2.1h1.2zm.1 2h-2.3c-.5.1-.6.4-.5.8.1.3.2.6.5.8 1.1 1.1 3.3 1.2 4.4.1.2-.2.4-.4.6-.7.3-.7 0-1.1-.7-1.1-.8.1-1.4.1-2 .1z"
      />
      <path
        fill="#614322"
        d="M39.6 61.7c0 1.6-1.3 2.9-2.9 3h-.1c-1.6 0-3-1.3-3-3 0-1.6 1.3-3 3-3s3 1.3 3 3zm-4-1.6c-.3 0-.6.3-.6.6s.3.6.6.6.6-.3.6-.6c0-.4-.3-.6-.6-.6zM54.3 64.7c-1.6 0-2.9-1.3-3-3 0-1.6 1.4-3 3-3s3 1.4 2.9 3c.1 1.7-1.2 3-2.9 3zm-1-4.7c-.3 0-.5.2-.6.4-.1.5.3.9.8.8.3-.1.4-.3.4-.6.1-.3-.2-.6-.6-.6z"
      />
      <path
        fill="#604222"
        d="M55.6 23.2c.5 0 .7.1.8.5.1.4-.2.6-.5.7-.4.2-.7.3-1.2.4-.3 0-.5-.1-.6-.3-.1-.3 0-.5.2-.7.3-.3.7-.6 1.3-.6zM55.8 26.2c-.4 0-.7-.2-.7-.5s.3-.6.7-.6c.4 0 .7.2.7.5 0 .4-.3.6-.7.6zM34.3 21.7V21c0-.4.2-.8.6-1 .5-.2.9 0 .9.5v.3c-.1.6-.1 1.1-.2 1.7-.1.3-.2.6-.5.6s-.5-.2-.6-.5c-.1-.4 0-.6-.2-.9z"
      />
      <path
        fill="#614322"
        d="M33.2 23.4c-.2-.3-.2-.6-.3-.8-.2-.6-.1-.8.5-1 .3 0 .5.2.8.3 0 .2 0 .4.1.6.1.3.2.6-.1.8-.4.2-.7.2-1 .1z"
      />
      <path fill="#604222" d="M37.6 22.2c0 .4-.2.7-.6.7-.4 0-.6-.3-.6-.7s.3-.8.6-.8c.3.1.6.4.6.8z" />
      <path
        fill="#FB5958"
        d="M45.7 67.8h1.9c.8 0 1 .4.7 1.1-.1.3-.3.5-.6.7-1.1 1-3.3.9-4.4-.1-.2-.2-.4-.5-.5-.8-.1-.5 0-.7.5-.8h.4c.7-.1 1.3-.1 2-.1z"
      />
      <path
        fill="#FEFEFE"
        d="M35.6 60.1c.3 0 .6.2.6.6 0 .3-.3.6-.6.6s-.6-.3-.6-.6.3-.6.6-.6zM54 60.6c0 .4-.3.7-.7.6-.2 0-.4-.2-.5-.5-.1-.3.2-.7.5-.7.4 0 .7.3.7.6z"
      />
    </Svg>
  );
};

export default Icon;
