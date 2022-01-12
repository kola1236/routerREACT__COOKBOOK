import { CategoryItam } from './CategoryItam';

function CategoryList({ catalog = [] }) {
    return (
        <div className='list'>
            {catalog.map((el) => (
                <CategoryItam key={el.idCategory} {...el} />
            ))}
        </div>
    );
}

export { CategoryList };
