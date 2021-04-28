import Image from 'next/image'

const HomePage = () => <div className="w-full h-screen flex justify-center">
	<div className="self-center w-24 h-24 mx-auto relative">
		<Image
			src="/logo.png"
			layout="fill"
			objectFit="contain"
		/>
	</div>
</div>

export default HomePage