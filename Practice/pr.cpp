#include<bits/stdc++.h>
using namespace std;

// k = max-min
// Time Complexity  => O(n+k)
// Space Complexity => O(max(n,k))

int leftmost_digit(int N)
{
	int ans = 0;
	int duplicate = N;
	while (duplicate != 0) {
		ans = duplicate;
		duplicate /= 10;
	}
	return ans;
}


void printArray(int arr[], int size)
{
	for (int i = 0; i < size; i++)
	{
		cout << arr[i] << " ";
	}
}



void countSort(int arr[], int size, int place)
{
	// max-element
	int max = 9;

	// frequency_array initialized with zero
	int frequency_array[max + 1];
	for (int i = 0; i <= max; i++)
	{
		frequency_array[i] = 0;
	}

	// Incrementing for occurrences
	int t;
	for (int i = 0; i < size; i++)
	{
		t = arr[i] / place;
		if (arr[i] < place) {
			t = leftmost_digit(arr[i]);
		}
		frequency_array[(t) % 10]++;
	}

// -------------------------------------------------------------------------------------------
// DEBUG:
	// printArray(frequency_array,max+1);
// -------------------------------------------------------------------------------------------

	// frequency_array -> prefix array
	for (int i = 1; i <= max; i++)
	{
		frequency_array[i] = frequency_array[i] + frequency_array[i - 1];
	}

	// shiftted_array is frequency array to the right by 1
	int shifted_array[max + 1];
	shifted_array[0] = 0;
	for (int i = 1; i <= max; i++)
	{
		shifted_array[i] = frequency_array[i - 1];
	}

	// ending the countsort
	int output[size];
	int temp;
	for (int i = 0; i < size; i++)
	{
		if (arr[i] < place) {
			temp = leftmost_digit(arr[i]);
			output[shifted_array[temp]] = arr[i];
			continue;
		}
		temp = arr[i] / place;
		output[shifted_array[(temp) % 10]] = arr[i];
		shifted_array[(temp) % 10]++;
	}

	// printArray(output,size);
	for (int i = 0; i < size; i++)
	{
		arr[i] = output[i];
	}

}

void raddix(int arr[], int size)
{
	// Max-element
	int mx = arr[0];
	for (int i = 1 ; i < size; i++)
	{
		if (arr[i] > mx) {
			mx = arr[i];
		}
	}

	// Depending on the number of digits in the max-number apply raddix sort
	for (int i = 1; (mx / i) > 0; i *= 10)
	{
		countSort(arr, size, i);
	}

}



int main() {

	int n; cin >> n;
	int arr[n];
	for (int i = 0; i < n; i++)
	{
		cin >> arr[i];
	}
	countSort(arr, n, 10);
	printArray(arr,n);
	cout<<"\n";
	raddix(arr, n);
	cout<<"\n";
	printArray(arr, n);
	return 0;
}

