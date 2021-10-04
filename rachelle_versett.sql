USE versett;

SELECT tree_table.id, tree_table.friendly_name, tree_table.scientific_name, user_table.name, COUNT(*) likes
FROM user_table
JOIN tree_table
ON user_table.id = tree_table.owner_id
JOIN likes_table
ON tree_table.id = likes_table.tree_id
WHERE user_table.email = 'adam@versett.com'
GROUP BY likes_table.tree_id
