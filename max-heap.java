public class maxHeap {
  public int size,count;
  public int[] data;

  public maxHeap (int inSize) {
    size = inSize;
    count = 0;
    data = new int[size];
  }

  public void buildHeap(int[] inData) {
    if(inData.length > size) {
      System.out.println("Sample data is larged than maxHeap capacity.");
    } else {
      int pivot;
      count  = inData.length;
      for(int i = 0; i < count;i++)
      data[i] = inData[i];
      pivot = count/2;
      for(int i = pivot; i > 0; i--)
      heapify(i);
    }
  }

  public void heapify(int i) {
    int l,r,largest;
    l = 2*i;
    r = 2*i+1;

    if(l<=count && data[l-1]>data[i-1]) {
      largest = l;
    } else {
      largest = i;
    }
    if(r<=count && data[r-1]>data[largest-1]) {
      largest = r;
    }
    if(largest != i){
      int temp = data[i-1];
      data[i-1] = data[largest-1];
      data[largest-1] = temp;
      heapify(largest);
    }
  }

  public void insert(int inData) {
    if(count==size) {
      System.out.println("maxHeap is full");
    } else {
    	data[count] = inData;
    	count++;
    	if(count == 1) {
        heapify(1);
      } else {
        for(int i = count/2;i>=1;i--) {
          heapify(i);
        }
    	}
    }
  }

	public void deleteMax() {
		if(count == 0)
			System.out.println("The maxHeap is empty");
		else
		{
			data[0] = data[count-1];
			count--;
			heapify(1);
		}
	}

  public int getSize() {
	  return size;
  }

  public String getHeap() {
    String temp = "";
    if(count == 0) {
      temp = "empty";
    } else {
      for(int i = 0; i < count; i++) {
        String tempa = Integer.toString(data[i]);
        if(i == 0) {
          temp = temp.concat(tempa);
        } else {
          temp = temp.concat(", " + tempa);
        }
      }
    }
    return temp;
  }
}
