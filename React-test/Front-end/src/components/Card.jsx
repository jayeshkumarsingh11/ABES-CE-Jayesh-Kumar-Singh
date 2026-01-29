import { useEffect, useState } from 'react';
import './Style.css';

const Card = ({ prods, productId = 1 }) => {
  const [height, setHeight] = useState(150);
  const [width, setWidth] = useState(150);
  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  useEffect(() => {
    if (prods) return;

    const controller = new AbortController();
    Promise.resolve().then(() => {
      setStatus('loading');
      setError('');
    });

    fetch(`https://fakestoreapi.com/products/${productId}`, {
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) throw new Error(`Request failed (HTTP ${res.status})`);
        return res.json();
      })
      .then((json) => {
        setProduct(json);
        setError('');
        setStatus('success');
      })
      .catch((err) => {
        if (err?.name === 'AbortError') return;
        setError(err?.message || 'Failed to fetch product');
        setStatus('error');
      });

    return () => controller.abort();
  }, [productId, prods]);

  const imageSrc = prods?.image ?? product?.image;

  return (
    <div className="card">
      {status === 'loading' && <p>Loading product…</p>}
      {error && <p className="error">Error: {error}</p>}

      {status !== 'loading' && !error && (prods || product) && (
        <>
          {imageSrc && (
            <img
              src={imageSrc}
              alt={prods?.name || product?.title || 'card'}
              height={height}
              width={width}
            />
          )}

          {prods ? (
            <>
              <p className="name">Name:- {prods.name}</p>
              <p className="age">Age:- {prods.age}</p>
            </>
          ) : (
            <>
              <h2>{product?.title}</h2>
              <p>Category: {product?.category}</p>
              <p>Price: ${product?.price}</p>
              {product?.rating && (
                <p>
                  Rating: {product.rating.rate} ({product.rating.count} reviews)
                </p>
              )}
            </>
          )}
        </>
      )}


    </div>
  );
};

export default Card;
