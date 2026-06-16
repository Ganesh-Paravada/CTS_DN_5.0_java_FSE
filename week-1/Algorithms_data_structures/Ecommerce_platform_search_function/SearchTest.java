import java.util.Arrays;
import java.util.Comparator;

public class SearchTest {
    public static void main(String[] args) {
        Product[] products = {
            new Product(101, "iPhone 17", "Electronics"),
            new Product(102, "IQZ10R", "Electronics"),
            new Product(103, "Asus Laptop", "Computers"),
            new Product(104, "One8 Shoes", "Footwear")
        };

        System.out.println(" Linear Search");
        Product linearResult = SearchUtils.linearSearch(products, "One8 Shoes");
        if (linearResult != null) {
            System.out.println("Found: " + linearResult.getProductName());
        } else {
            System.out.println("Product not found.");
        }
        System.out.println("\nBinary Search");
        Product binaryResult = SearchUtils.binarySearch(products, "Asus Laptop");
        if (binaryResult != null) {
            System.out.println("Found: " + binaryResult.getProductName());
        } else {
            System.out.println("Product not found.");
        }
    }
}
