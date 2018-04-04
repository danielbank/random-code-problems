public enum FSType {
  DIRECTORY, FILE
}

public class FileSystem {
  private Directory mRoot;
  private Directory mWorkingDir;
  public FileSystem() {
    this.mRoot = new Directory();
    this.mWorkingDir = root;
  }

  public pwd() {
    return workingDir.getPath();
  }
}

abstract class FSObject {
  private String mName;
  private FSType mType;
  public FSObject(name, type) {
    this.mName = name;
    this.mType = type
  }

  public String getName() {
    return this.mName
  }

  public void setName(String value){
    this.mName = value;
  }

  public String getPath() {

  }
}

public class Directory extends FSObject {
  public Directory(name) {
    super(name, FSType.Directory);
  }
}

public class File extends FSObject {
  public File(name) {
    super(name, FSType.FILE);
  }
}

/*
import java.util.*;
public class HashMapDemo {

   public static void main(String args[]) {

      // Create a hash map
      HashMap hm = new HashMap();

      // Put elements to the map
      hm.put("Zara", new Double(3434.34));
      hm.put("Mahnaz", new Double(123.22));
      hm.put("Ayan", new Double(1378.00));
      hm.put("Daisy", new Double(99.22));
      hm.put("Qadir", new Double(-19.08));

      // Get a set of the entries
      Set set = hm.entrySet();

      // Get an iterator
      Iterator i = set.iterator();

      // Display elements
      while(i.hasNext()) {
         Map.Entry me = (Map.Entry)i.next();
         System.out.print(me.getKey() + ": ");
         System.out.println(me.getValue());
      }
      System.out.println();

      // Deposit 1000 into Zara's account
      double balance = ((Double)hm.get("Zara")).doubleValue();
      hm.put("Zara", new Double(balance + 1000));
      System.out.println("Zara's new balance: " + hm.get("Zara"));
   }
}
*/

/*
interface FSObject {
  string name;
  FSObjectType objType;
}

class Directory:FSObject {
  string name;
  Dictionary<string, FSObject> directoryItems;

  public Directory(string name) {
    objType = Directory;
  }

  public Add(FSObject fsObj) {
    if(directoryItems.FindKey(fsObj.name) != null) {
      throw new Exception("Object by that name already exists!");
    } else {
      directoryItems[fsObj.name] = fsObj;
    }
  }
}
*/
