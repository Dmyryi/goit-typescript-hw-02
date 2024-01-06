interface ComponentProps {
  id: number;
  className: string;
}

class Component<T extends ComponentProps> {
  constructor(public props: T) {
    // Логіка конструктора
  }
}

// Приклад використання:
interface PageProps extends ComponentProps {
  title: string;
}

class Page extends Component<PageProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}

// Використання
const pageInstance = new Page({ id: 1, className: 'page', title: 'My Page Title' });
pageInstance.pageInfo();
export{}