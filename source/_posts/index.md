---
title: index
date: 2019-05-30 02:34:50
tags:
---

Hello World

![](index/index-demo.jpg)

Image

```java
@WebService(endpointInterface="com.mycompany.Library")
public class LibraryImpl implements Library {
    private static Map<Integer, Book> store = new HashMap<Integer, Book>();
    private static int currentId=0;
 
    @Override
    public Book addBook(Book book) {
        book.setId(++currentId);
        store.put(book.getId(), book);
        return book;
    }
 
    @Override
    public Book getBook(int id) {
        return store.get(id);
    }
 
    @Override
    public Book[] getBooksArray() {
        List<Book> l = new ArrayList<Book>();
        Iterator<Integer> it = store.keySet().iterator();
        while(it.hasNext()) {
            l.add(store.get(it.next()));
        }
        Book[] r = l.toArray(new Book[1]);
        System.out.println(r.length);
        return r;
    }
 
    @Override
    public List<Book> getBookList() {
        List<Book> l = new ArrayList<Book>();
        Iterator<Integer> it = store.keySet().iterator();
        while(it.hasNext()) {
            l.add(store.get(it.next()));
        }
        return l;
    }
 
    @Override
    public Map<Integer, Book> getBookMap() {
        return store;
    }
 
    @Override
    public boolean deleteBook(int id) {
        if (store.containsKey(id)) {
            store.remove(id);
            return true;
        } else {
            return false;
        }
    }
}
```