document.addEventListener('DOMContentLoaded', () => {
    // Product Data (Professional tech gadget photography from Unsplash)
    const products = [
        {
            id: 1,
            name: 'Acoustic Noise Cancelling Headphones',
            category: 'Audio',
            price: 299.00,
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 2,
            name: 'Ultra-Slim Mechanical Keyboard',
            category: 'Peripherals',
            price: 149.50,
            image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 3,
            name: '4K Curved Master Monitor',
            category: 'Displays',
            price: 699.99,
            image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 4,
            name: 'Precision Wireless Mouse',
            category: 'Peripherals',
            price: 79.99,
            image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 5,
            name: 'Minimalist Smart Speaker',
            category: 'Smart Home',
            price: 199.00,
            image: 'https://images.unsplash.com/photo-1543512214-318c7553f230?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 6,
            name: 'Professional Camera Lens',
            category: 'Photography',
            price: 899.00,
            image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        }
    ];

    const productGrid = document.getElementById('productGrid');
    const cartCountEl = document.querySelector('.cart-count');
    let cartCount = 0;

    // Render Products
    function renderProducts() {
        if (!productGrid) return;

        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';

            card.innerHTML = `
                <div class="product-image-container">
                    <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
                </div>
                <div class="product-info">
                    <div class="product-category">${product.category}</div>
                    <h3 class="product-title">${product.name}</h3>
                    <div class="product-price">$${product.price.toFixed(2)}</div>
                    <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
                </div>
            `;

            productGrid.appendChild(card);
        });
    }

    // Handle Add to Cart
    function setupCartInteraction() {
        productGrid.addEventListener('click', (e) => {
            if (e.target.classList.contains('add-to-cart-btn')) {
                const btn = e.target;

                // Add loading/success state to button
                const originalText = btn.textContent;
                btn.textContent = 'Added!';
                btn.style.backgroundColor = 'var(--primary-blue)';
                btn.style.color = 'var(--white)';

                // Update cart count with animation
                cartCount++;
                cartCountEl.textContent = cartCount;

                // Animate cart icon
                cartCountEl.style.transform = 'scale(1.3)';
                setTimeout(() => {
                    cartCountEl.style.transform = 'scale(1)';
                }, 200);

                // Reset button after 1.5s
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.backgroundColor = '';
                    btn.style.color = '';
                }, 1500);
            }
        });
    }

    // Smooth Scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Initialize
    renderProducts();
    setupCartInteraction();
});
