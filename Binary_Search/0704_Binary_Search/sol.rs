struct Solution;

impl Solution {
    /// Strategy: Binary search implementation
    /// Time:  O(log N)
    /// Space: O(1)
    pub fn solve(arr: Vec<i32>, target: i32) -> i32 {
        if arr.is_empty() { return -1; }
        let mut low = 0;
        let mut high = arr.len() -1;
        let mut mid;
        while low <= high{
            mid = low + (high-low)/2;
            if target > arr[mid]{
                low = mid +1;
            }else if target < arr[mid]{
                if mid == 0 { break; }
                high = mid -1;
            }else {
                return mid as i32;
            }
        }
        return -1;
    }
}

fn run_tests() {
    // Format: ( (input_vec, target), expected_output )
    let test_cases = vec![
        ((vec![-1, 0, 3, 5, 9, 12], 9), 4),
        ((vec![-1, 0, 3, 5, 9, 12], 2), -1),
        ((vec![-1, 0, 3, 5, 9, 12], 0), 1),
        ((vec![5], 5), 0),
        ((vec![], 5), -1),
    ];
    println!("--- Running Tests ---");
    for (i, ((arr, target), expected)) in test_cases.into_iter().enumerate() {
        let result = Solution::solve(arr, target);
        let is_correct = result == expected;
        let status = if is_correct { "✅" } else { "❌" };
        println!("{} Test #{} | Expected: {} | Result: {}", status, i, expected, result);
    }
}
fn main() {
    run_tests();
}