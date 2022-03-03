import NextLink from 'next/link'

export const Logo = () => {
  return (
    <NextLink href="/" passHref>
      <div className="center no-underline cursor-pointer select-none font-bold p-2">
        <span className="p-0 xs:p-2">🌻</span>
        <span className="hidden xs:block text-sm xs:text-md md:text-xl">
          Bubki
        </span>
      </div>
    </NextLink>
  )
}
