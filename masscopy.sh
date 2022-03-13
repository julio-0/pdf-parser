find -name "*.pdf" | cat -n | while read n f; do
  echo "copying $n"
  cp "$f" "$f-$n".pdf
done
