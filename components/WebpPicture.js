// Offers a WebP version of an image first, so browsers that can't decode WebP still get the
// original file. display: contents keeps the <picture> out of layout, so the <img> inside sizes
// and positions as it would on its own. One exception: don't use it on an <img> that's a flex item
// (e.g. the gallery tiles); Chrome then computes the item's size differently.
export default function WebpPicture({ webp, children }) {
  if (!webp) {
    return children;
  }

  return (
    <picture style={{ display: 'contents' }}>
      <source srcSet={webp} type='image/webp' />
      {children}
    </picture>
  );
}
