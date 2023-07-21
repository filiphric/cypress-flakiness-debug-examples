interface MessageProps {
  visibility: boolean;
  error: boolean;
  message: string;
}

const Message = ({ visibility, error, message }: MessageProps) => (
  <div>
    {visibility && <p className={error ? 'text-red-500' : 'text-green-500'}>{message}</p>}
  </div>
);

export default Message;
