export function Logo() {
    return (
        <div className='flex items-center flex-shrink-0'>
            <img
                className='lg:hidden block w-auto h-8'
                src='/images/logo.png'
                alt='fantasy football'
            />
            <img
                className='lg:block hidden w-auto h-8'
                src='/images/logo.png'
                alt='fantasy football'
            />
        </div>
    );
}
