import Image from 'next/image';

function Loading() {
  return (
    <div>
      <Image width={150} src="/assets/Spinner.gif" alt="image-loading" />
    </div>
  );
}

export default Loading;
